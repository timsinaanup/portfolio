function openTab(tabName) {
    // 1. Hide all content
    var contents = document.getElementsByClassName("content");
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove("active-content");
    }

    // 2. Remove 'active' class from all tabs
    var tabs = document.getElementsByClassName("tab");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }

    // 3. Remove 'active' class from all sidebar files
    var files = document.getElementsByClassName("file");
    for (var i = 0; i < files.length; i++) {
        files[i].classList.remove("active");
    }

    // 4. Show the specific tab content
    document.getElementById(tabName).classList.add("active-content");

    // 5. Highlight the top tab
    document.getElementById("tab-" + tabName).classList.add("active");

    // 6. Highlight the sidebar file (using simple index mapping for this demo)
    // Note: In a real app, you'd select by ID, but order matches here.
    if(tabName === 'home') files[0].classList.add("active");
    if(tabName === 'about') files[1].classList.add("active");
    if(tabName === 'infivity') files[2].classList.add("active");
    if(tabName === 'contact') files[3].classList.add("active");

    // 7. Update Breadcrumbs
    var fileExtension = "html";
    if(tabName === 'about') fileExtension = "py";
    if(tabName === 'infivity') fileExtension = "json";
    if(tabName === 'contact') fileExtension = "css";
    
    // Formatting the name slightly for the breadcrumb
    let displayName = tabName === 'infivity' ? 'infivity_data' : tabName === 'about' ? 'about_me' : tabName;
    if(displayName === 'home') displayName = 'index';

    document.getElementById("current-file").innerText = `${displayName}.${fileExtension}`;
}