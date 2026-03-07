function displayCurrentYear() 
{
    const yearSpan = document.getElementById("currentyear");
    if (yearSpan)
    {
        yearSpan.textContent = new Date().getFullYear();
    }
}

function displayLastModified()
{
    const modifiedPara = document.getElementById("lastModified");
    if (modifiedPara)
        {
            modifiedPara.textContent = "Last Modified: " + document.lastModified
        }
}

displayCurrentYear();
displayLastModified();