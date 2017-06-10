    function openPost(item)
    {
            item.click();
    }
    function likePost()
    {
        var likeBtn = document.getElementsByClassName("_tk4ba _1tv0k");
        likeBtn[0].click();
        var exitBtn = document.getElementsByClassName("_3eajp")[0];
        exitBtn.click();
    }
    function likePostWrapper(item)
    {
        openPost(item);
        setTimeout(likePost, 2000);
    }
    function loadPosts()
    {
        var loadPostsBtn = document.getElementsByClassName("_8imhp _glz1g");
        loadPostsBtn[0].click();
    }
    function likePostByIndex(index)  //индексация с единицы, т.е по человечески: передаем 1 - лайкаем первый пост.
    {
        if ((typeof index) == "number")
        {
            var posts = document.getElementsByClassName("_8mlbc _vbtk2 _t5r8b");
            var postToLike = posts[index-1];
            likePostWrapper(postToLike);
        }
   }
loadPosts();
var posts = document.getElementsByClassName("_8mlbc _vbtk2 _t5r8b");
var i;
var postsAmount = Math.floor(Math.random()*6)+4;
for(i = 0; i < postsAmount; i++)
{
var postToLike = Math.floor(Math.random()*posts.length)+1;
console.log(postToLike);
setTimeout(likePostByIndex, i*2000, postToLike);
}