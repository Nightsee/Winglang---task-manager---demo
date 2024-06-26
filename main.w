bring cloud;
bring expect;
bring ex;


let website = new cloud.Website(path: "./public");
let api = new cloud.Api({cors: true});
let counter = new cloud.Counter();
let db = new ex.Table(
  name: "tasks",
  primaryKey: "id",
  columns: {
    "name" => ex.ColumnType.STRING
  }
);

//serverless functions
let addTask = new cloud.Function(inflight (data) => { 
  if let body = data {
    let taskdata = Json.parse(body);
    let id = "{counter.inc()}";
    db.insert(id, taskdata);
    return id;
  }
}) as "Add Task";

let deleteTask = new cloud.Function(inflight (taskid) => {
  if let id = taskid {
    db.delete(id);
    return "azd";
  }
}) as "Delete Task";

// API endpoints

api.get("/", inflight () => {
  let result = MutJson [];
  let var i = 0;
  for task in db.list() {
    result.setAt(i, task);
    i = i + 1;
  }
  return cloud.ApiResponse {
    status: 200,
    body: Json.stringify(result)
  };
});

api.post("/add", inflight (request: cloud.ApiRequest): cloud.ApiResponse => {
    let id = addTask.invoke(request.body);
    return cloud.ApiResponse {
      status: 200
    };
});

api.delete("/delete/:id", inflight (request: cloud.ApiRequest): cloud.ApiResponse => {
  let taskid = request.vars.get("id");
  deleteTask.invoke(taskid);
  return cloud.ApiResponse {
    status: 200
  };
});



