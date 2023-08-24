document.querySelector('#copy-btn').addEventListener('click', function(){
    const copyFeild = document.querySelector('#copy-feild')
    const copyFeildValue = copyFeild.value
    navigator.clipboard.writeText(copyFeildValue)
})

document.querySelector('#cut-btn').addEventListener('click', function(){
    const cutFeild = document.querySelector('#cut-feild')
    const cutFeildValue = cutFeild.value
    navigator.clipboard.writeText(cutFeildValue)
    cutFeild.value=''
})
document.querySelector('#paste-btn').addEventListener('click', function(){
    const pasteFeild = document.querySelector('#paste-feild')
    pasteFeild.value = ''
    navigator.clipboard.readText().then(function(text){
        pasteFeild.value=text
    })
})
