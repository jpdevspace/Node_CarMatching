$(document).ready(function() {
    // Initializing Materialize component
    $('select').material_select();


    const submitForm = (e) => {
        e.preventDefault();
        const fieldOne = $('select[name="roadtrips"]').val();
        const fieldTwo = $('select[name="outdoor"]').val();
        const fieldThree = $('select[name="alone"]').val();
        const fieldFour = $('select[name="electric"]').val();
        const fieldFive = $('select[name="miami"]').val();
        const fieldSix = $('select[name="batman"]').val();

        const userData = [
            fieldOne,
            fieldTwo,
            fieldThree,
            fieldFour,
            fieldFive,
            fieldSix
        ]
        
        $.post("/survey", userData)
            .then( data => {
                console.log(data);
            });
    }

    $('button[type="submit"]').on("click", submitForm);
});