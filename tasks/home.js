// process.stdin.resume();
// process.stdin.setEncoding("utf8");

// var stdin = "";
// process.stdin
//   .on("data", function (chunk) {
//     stdin += chunk;
//   })
//   .on("end", function () {
//     var lines = process.stdin.trim().split("\n");
//     for (var i = o; i < lines.lingth; i++) {
//       var result = parseInt(lines[i]) * parseInt(lines[i]);
//       process.stdin.write(result.toString());
//     }
//   });

// console.log(stdin);

// process.stdin.resume();
// process.stdin.setEncodeing("utf8");
// stdin = "";
// process.stdin
//   .on("data", function (chunk) {
//     stdin += chunk;
//   })
//   .on("end", function () {
//     var lines = process.stdin.trim().split("\n");
//     for (var i = 0; i < lines.length; i++) {
//       // one value per line,parse string into integer and multiply
//       var result = preseInt(lines[i]) * parseInt(lines[i]);
//       //convert result to string
//       process.stdin.write(result.toString());
//     }
//   });

// process.stdin.resume();
// process.stdin.setEncoding("utf8");
// stdin = "";
// process.stdin
//   .on("data", function (chunk) {
//     stdin += chunk;
//   })
//   .on("end", function () {
//     var lines = process.stdin.trim().split("\n");
//     for (var i = 0; i < lines.length; i++) {
//       //one value per line,parse string integer and multiply
//       var result = parseInt(lines[i]) * parseInt(lines[i]);
//       //convert result to string
//       process.stdin.write(result.toString());
//     }
//   });

// process.stdin.resume();
// process.stdin.setEncoding("utf8");
// stdin = "";
// process.stdin
//   .on("data", function (chunk) {
//     stdin += chunk;
//   })
//   .on("end", function () {
//     var lines = process.stdin.trim().split("\n");
//     for (var i = 0; i < lines.length; i++) {
//       //one value per line,parse string integer and multiply
//       var results = parseInt(lines[i]) * parseInt(lines[i]);
//       //convert result to string
//       process.stdout.write(results.toString());
//     }
//   });

// process.stdin.resume();
// process.stdin.setEncoding('utf8');
// stdin='';
// process.stdin.on('data',function(chunk){
// stdin+=chunk;
// }).on('end',function(){
//   var lines=process.stdin.trim().split('\n');
//   for(var i=0;i<lines.length;i++){
//     //one value per line,parse integer string and multiply
// var result=parseInt(lines[i]) * pareseInt([i]);
// //conert result to string
// process.stdout.write(result.toString());
//   }
// })

// process.stdin.resume();
// process.stdin.setEncoding("utf8");
// stdin = "";
// process.stdin
//   .on("data", function (chunk) {
//     stdin += chunk;
//   })
//   .on("end", function () {
//     var lines = stdin.trim().split("\n");
//     for (var i = 0; i < lines.length; i++) {
//       //one value per line,parse integer string and multiply
//       var result = pareseInt(lines[i]) * pareseInt(lines[i]);
//       //convert result to string
//       process.stdout.write(result.toString());
//     }
//   });

// process.stdin.resume();

// process.stdin.setEncoding('utf8');
// var stdin='';
// process.stdin.on('data',function(chunk){
//   stdin+=chunk;
// }).on('end',function(){
//   var lines=stdin.trim().split('\n');
//   for(var i=0;i<lines.length;i++){
//     //one value per line,parse integer string and multiply
//     var result=pareseInt(lines[i]) * parseInt(lines[i]);
//     //coverted result to string
//     process.stdout.write(result.toString());
//   }
// })

process.stdin.resume();
process.stdin.setEncoding();

var stdin = "";
process.stdin
  .on("data", function (chunk) {
    stdin += chunk;
  })
  .on("end", function () {
    var lines = stdin.trim().split("\n");
    for (var i = 0; i < lines.length; i++) {
      //one value per line,parese integer string and multiply
      var result = pareseInt(lines[i]) * pareseInt(lines[i]);
      //converted reult to string
      process.stdout.write(result.toString());
    }
  });

var sum = function (a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return function (e) {
          return a + b + c + d + e;
        };
      };
    };
  };
};

// console.log(sum(1)(2)(3)(4)(5));

(function () {
  console.log("chandu");
})();

function higherOrder(fn) {
  return fn();
}

higherOrder(function () {
  console.log("Hello world");
});

// var obj = {
//   name: "vivek",
//   getName: function () {
//     console.log(this.name, this.room, this);
//   },
// };

// var getName = obj.getName;

// var obj2 = { name: "akshay", room: "red", getName };
// obj2.getName();

var obj1 = {
  address: "Mumbai,India",
  getAddress: function () {
    console.log(this.name);
  },
};

let a = ["a", "b", "c", "d"];

let b = { e: "demo", f: "first" };

let d = [1, 2, 3, 4, 5];
let f = [6, 7, 8, 9, 10];

let c = [...a, b].filter((x) => x == "a");
let e = [...d, ...f].filter((x) => x < 2 || x > 7 || x === 3);

console.log(e);
