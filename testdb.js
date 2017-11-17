var data = require ( "./data" );
const comments = data.comments;

async function main() {
    console.log("Comment Tests");
    let t1 = await comments.createComment("a","b","lol");
    console.log("Testing Create: ");
    console.log(t1);
    let t2 = await comments.getCommentById(t1._id);
    console.log("Testing Get: ");
    console.log(t2);
    let t3 = await comments.removeCommentById(t1._id);
    console.log("Testing Remove: " + t3);
    let t4 = await comments.empty();
    console.log("Emptying: " + t4);

    t1 = await comments.createComment("a","b","lol");
    t1 = await comments.createComment("a","b","lol");
    t1 = await comments.createComment("a","c","lol");
    t1 = await comments.createComment("a","c","lol");

    t1 = await comments.getCommentsByRecipeId("b");
    console.log("Testing GetByRecipeId: ");
    console.log(t1);
    t1 = await comments.removeCommentsByRecipeId("b");
    console.log("Testing RemoveByRecipeId");
    console.log(t1);
    t1 = await comments.getCommentsByUserId("a");
    console.log("Testing getByUser");
    console.log(t1);
    t1 = await comments.removeCommentsByUserId("a");
    console.log("Testing removeByUser");
    console.log(t1);

}

main().catch((e) => {
    console.error(e);
});