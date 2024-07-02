bring cloud;
bring dynamodb;

// version with dynamodb instead of ex.table

// ressources
let website = new cloud.Website(path: "./public");
let api = new cloud.Api({cors: true});
let counter = new cloud.Counter();

let db = new dynamodb.Table(
  attributes: [
    {
      name: "id",
      type: "S",
    },
  ],
  hashKey: "id",
);
//serverless functions


let addTask = new cloud.Function(inflight (data) => { 
  if let body = data {
    try {
      let taskdata = Json.parse(body);
      let id = "{counter.inc()}";
      db.put(Item: {id: id, task: taskdata["task"]});
      return Json.stringify({success: true, message: "adding ...."}); 
    } catch e {
      log(e);
      return Json.stringify({success: false, message: "can't add task."});
    }
  }
}) as "Add Task";

let deleteTask = new cloud.Function(inflight (taskid) => {
  if let id = taskid {
    try{
      db.delete(
        Key: {
          id: id,
        },
        ReturnValues: "NONE"
      );
      return Json.stringify({success: true});
    }catch{
      return Json.stringify({success: false});
    }
  }
}) as "Delete Task";

let getTasks = new cloud.Function(inflight () => {
  try{
    let res = db.scan();
    let tasks = res.Items;
    return Json.stringify({success: true, tasks: tasks});
  }catch{
    return Json.stringify({success: false});
  }
}) as "get tasks";

// API endpoints

api.get("/", inflight () => {
  let res = getTasks.invoke();
  let tmp = Json.parse(res!);
  if tmp["success"] == true {
    return cloud.ApiResponse {
      status: 200,
      headers: {"Content-Type": "application/json"},
      body: Json.stringify({tasks: tmp["tasks"]})
    };
  } else {
    return cloud.ApiResponse {
      status: 504,
      headers: {"Content-Type": "application/json"},
    };
  }
});

api.post("/add", inflight (request: cloud.ApiRequest): cloud.ApiResponse => {
    let res = addTask.invoke(request.body);
    let tmp = Json.parse(res!);
    if tmp["success"] == true {
      return cloud.ApiResponse {
        status: 200,
        headers: {"Content-Type": "application/json"},
        body: Json.stringify({message: tmp["message"]})
      };
    } else {
      return cloud.ApiResponse {
        status: 504,
        headers: {"Content-Type": "application/json"},
        body: Json.stringify({message: tmp["message"]})
      };
    }
});

api.delete("/delete/:id", inflight (request: cloud.ApiRequest): cloud.ApiResponse => {
  let taskid = request.vars.get("id");
  let res = deleteTask.invoke(taskid);
  let tmp = Json.parse(res!);
  if tmp["success"] == true {
    return cloud.ApiResponse {
      status: 200
    };
  } else {
    return cloud.ApiResponse {
      status: 504
    };
  }
});



