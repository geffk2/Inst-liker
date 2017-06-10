document.getElementById("submit").addEventListener("click", function()
{
var STags = document.getElementById("input").value;
var tags = STags.split(', ');
var i;
if(tags.length < 5)
for(i = 0; i < tags.length; i++)
{
chrome.tabs.create({
    index: 0,
    url: 'https://instagram.com/explore/tags/'+tags[i]+'/',
    active: false,
    pinned: false,
}, function(tab)
    {
    chrome.tabs.executeScript(tab.id, 
        {
            file: "/js/likeTag.js"
        });
    setTimeout(chrome.tabs.remove, 20000, tab.id);
}); 
}
});
