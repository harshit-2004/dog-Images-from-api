
$.ajax({
    url:'https://dog.ceo/api/breeds/list/all',
    method:"GET",
    success:function(data){
        var obj = data.message;
        for (let breed in obj) {
            $('#given-breed').append('<option value="' + breed.toUpperCase() + '">' + breed.toUpperCase() + '</option>');
        }
    }
})

$('#image').on('submit',function(event){
    event.preventDefault();
    console.log("hello");
    var breed_name = $('#given-breed')[0].value;
    breed_name = breed_name.toLowerCase();
    console.log(breed_name);

    $.ajax({
        url:'https://dog.ceo/api/breed/'+breed_name+'/images/random',
        method:"GET",
        success:function(data){
            console.log(data.message);
            $('#dog-img').attr('src',data.message); 
        }
    })
})