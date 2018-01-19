$(document).ready(function() {
    // Initializing Materialize component
    $('select').material_select();
    $('.modal').modal();

    const submitForm = (e) => {
        e.preventDefault();

        const $name = $('#name');
        const $car = $('#car');
        const $carPic = $('#carPic');

        const firstName = $('#first_name').val();
        const fieldOne = $('select[name="roadtrips"]').val();
        const fieldTwo = $('select[name="outdoor"]').val();
        const fieldThree = $('select[name="alone"]').val();
        const fieldFour = $('select[name="electric"]').val();
        const fieldFive = $('select[name="miami"]').val();
        const fieldSix = $('select[name="batman"]').val();

        const userData = {
            roadtrips: fieldOne,
            outdoor: fieldTwo,
            alone: fieldThree,
            electric: fieldFour,
            miami: fieldFive,
            batman: fieldSix
        };
        
        $.ajax({
            type: 'POST',
            url: '/survey', 
            data: userData,
            success: bestMatch => {
                // Populate the modal 
                $name.html(firstName);
                $car.html(bestMatch.car);
                $carPic.attr('src', bestMatch.img);
                $carPic.addClass('responsive-img');
                // Open the modal
                $('#modal1').modal('open');
                console.log(bestMatch);
            },
            error: () => {
                alert('There was an error with your survey, please try again');
            }
        })
    }

    $('button[type="submit"]').on("click", submitForm);
});