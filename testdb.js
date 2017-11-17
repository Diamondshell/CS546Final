var data = require ( "./data" );
const comments = data.comments;

async function main() {
    console.log("Comment Tests");
    let t1 = await comments.createComment("a","b","lol");
    console.log("Testing Create: " + t1);
    let t2 = await comments.getCommentById(t1._id);
    console.log("Testing Get: " + t2 );
    let t3 = await comments.removeCommentById(t1._id);
    console.log("Testing Remove: " + t3);
}

main();