

$(document).ready(() => {

    let state = 0;
    let isSpecialPage = true;
    let isQuestion2 = true
    var coverageArray = [];
    var interestArray = [];


    let answers = [
        {
            id: 0,
            label: 'Do you make money selling insurance?',
            value: 'No'
        },
        {
            id: 1,
            label: 'What is your Gross Written Premium?',
            value: 'Not Applicable'
        },
        {
            id: 2,
            label: 'What is your Loss Ratio?',
            value: 'Not Applicable'
        },
        {
            id: 3,
            label: 'How much do you spend on insurance premiums annually?',
            value: 'Not Applicable'
        },
        {
            id: 4,
            label: 'What is the total amount of your claims in an average year?',
            minValue: 'Not provided',
            maxValue: 'Not provided'
        },
        {
            id: 5,
            label: 'My business is most concerned with the following insurance policies:',
            values: [],
            other: ''
        },
        {
            id: 6,
            label: 'My industry is',
            value: 'Not provided'
        },
        {
            id: 7,
            label: 'What interests you most in captive insurance?',
            values: []
        },
        {
            id: 8,
            label: 'Full Name',
            value: 'Not provided'
        },
        {
            id: 8,
            label: 'Company Name',
            value: 'Not provided'
        },
        {
            id: 10,
            label: 'Email Address',
            value: 'Not provided'
        },
        {
            id: 11,
            label: 'Phone Number',
            value: 'Not provided'
        },
    ]

    function formatPremium(parsedPremium) {
        var formattedValue = '';
        if (parsedPremium >= 1000 && parsedPremium < 1000000) {
            formattedValue = (parsedPremium / 1000).toFixed(1) + 'K';
        } else if (parsedPremium >= 1000000 && parsedPremium < 1000000000) {
            formattedValue = (parsedPremium / 1000000).toFixed(1) + 'M';
        } else {
            formattedValue = parsedPremium.toString();
        }

        // Ensure there is only one decimal place, remove if it's a '.0'
        formattedValue = formattedValue.replace(/\.0([KM])?$/, '$1');

        return '$' + formattedValue;
    }



    const resultsBuilder = () => {
        //reset instance
        let firstCoverage = $('.sm-results--4--wrapper').find('.results--text').eq(0);
        let firstInterest = $('.sm-results--6--wrapper').find('.results--text').eq(0);

        $('.sm-results--4--wrapper').find('.results--text').each((index, element) => {
            if (index > 0) $(element).remove()
        });
        $('.sm-results--6--wrapper').find('.results--text').each((index, element) => {
            if (index > 0) $(element).remove()
        });

        console.log('boolean',)

        $('.sm-results--1--wrapper').find('.results--text').text(answers[0].value)
        if (Boolean(answers[1].value)) $('.sm-results--1a--wrapper').find('.results--text').text(answers[1].value)
        if (Boolean(answers[2].value)) $('.sm-results--1b--wrapper').find('.results--text').text($('#What-Is-Your-Loss-Ratio-percentage').val().trim())
        if (Boolean(answers[3].value)) $('.sm-results--2--wrapper').find('.results--text').text(answers[3].value)
        if (Boolean(answers[4].minValue)) $('.sm-results--3--wrapper').find('.results--text').eq(0).text(answers[4].minValue)
        if (Boolean(answers[4].maxValue)) $('.sm-results--3--wrapper').find('.results--text').eq(1).text(answers[4].maxValue)
        if (Boolean(answers[6].value)) $('.sm-results--5--wrapper').find('.results--text').text(answers[6].value)

        answers[5].values.forEach((element, index) => {
            firstCoverage.clone().appendTo('.sm-results--4--wrapper');
        });
        firstCoverage.remove();
        answers[5].values.forEach((value, index) => {
            $('.sm-results--4--wrapper').find('.results--text').eq(index).text(value)
        });

        answers[7].values.forEach((element, index) => {
            firstInterest.clone().appendTo('.sm-results--6--wrapper');
        });
        firstInterest.remove();
        answers[7].values.forEach((value, index) => {
            $('.sm-results--6--wrapper').find('.results--text').eq(index).text(value)
        });

        if (Boolean(answers[8].value)) $('.sm-results--7--wrapper').find('.results--text').eq(0).text(answers[8].value)
        if (Boolean(answers[9].value)) $('.sm-results--7--wrapper').find('.results--text').eq(1).text(answers[9].value)
        if (Boolean(answers[10].value)) $('.sm-results--7--wrapper').find('.results--text').eq(2).text(answers[10].value)
        if (Boolean(answers[11].value)) $('.sm-results--7--wrapper').find('.results--text').eq(3).text(answers[11].value)

    };


    const specialSliderHandler = (amount) => {


        //update texts if user filled 
        var formattedPremium_1 = formatPremium((amount / 4));
        var formattedPremium_2 = formatPremium((amount / 4) * 2);
        var formattedPremium_3 = formatPremium((amount / 4) * 3);
        var formattedPremium_4 = formatPremium(amount);

        if (Number(amount) > 0) {
            $('.double-slider--value--text').eq(0).text('$0')
            $('.double-slider--value--text').eq(1).text(formattedPremium_1)
            $('.double-slider--value--text').eq(2).text(formattedPremium_2)
            $('.double-slider--value--text').eq(3).text(formattedPremium_3)
            $('.double-slider--value--text').eq(4).text(formattedPremium_4)


            $('.double-slider--label').eq(0).text(formattedPremium_1)
            $('.double-slider--label').eq(1).text(formattedPremium_2)
        }




        const dividerPositions = [];
        const buttonHalfWidth = $('.slider-button--1').width() / 2;

        // Gather all divider positions
        $('.double-slider--value--divider').each(function () {
            // Adjust the position by half the button's width for center alignment
            dividerPositions.push($(this).position().left + $(this).width() / 2 - buttonHalfWidth);
        });

        // Set the initial positions of the buttons:
        $('.slider-button--1').css('left', dividerPositions[1] + 'px');
        $('.slider-button--2').css('left', (dividerPositions[2] - $('.slider-button--2').width()) + 'px');

        // Also, set the initial width and position of the progress bar to span between the two buttons:
        $('.s-slider--progress').css({
            'left': dividerPositions[1] + 'px',
            'width': (dividerPositions[2] - dividerPositions[1]) + 'px'
        });

        $('.sm--graph--block--1').css('width', '23%')
        $('.sm--graph--block--2').css('width', '50%')

        const getClosestDividerPosition = (leftValue) => {
            return dividerPositions.reduce((prev, curr) => {
                return (Math.abs(curr - leftValue) < Math.abs(prev - leftValue) ? curr : prev);
            });
        };

        const updateProgressBar = ($progressBar, button1Pos, button2Pos) => {
            $progressBar.css({
                'left': `${button1Pos}px`,
                'width': `${button2Pos - button1Pos}px`
            });
        };

        let button1Index = 1; // Initialize with default values
        let button2Index = 2;

        const handleDrag = function (ui, $button, isButton1, $button1, $button2, $sliderBlock) {
            const isButton2 = !isButton1;
            let newPos = getClosestDividerPosition(ui.position.left);
            const dividerIndex = dividerPositions.indexOf(newPos);

            const otherButtonPos = isButton1 ? $button2.position().left : $button1.position().left;

            if (isButton1 && newPos >= otherButtonPos) {
                newPos = otherButtonPos - 1;
            } else if (!isButton1 && newPos <= otherButtonPos) {
                newPos = otherButtonPos + 1;
            }

            if (isButton1) {
                button1Index = dividerIndex;
            } else {
                button2Index = dividerIndex;
            }

            if (!isButton1) {
                newPos -= $button2.width();
            }
            // Check if both buttons are at dividerIndex 4
            if (button1Index === 4 && button2Index === 4) {
                const currentText = $('.double-slider--value--text').eq(4).text();
                if (!currentText.endsWith('+')) {
                    $('.double-slider--value--text').eq(4).text(currentText + '+');
                }
            } else {
                const currentText = $('.double-slider--value--text').eq(4).text();
                if (currentText.endsWith('+')) {
                    $('.double-slider--value--text').eq(4).text(currentText.slice(0, -1));
                }
            }



            ui.position.left = newPos;
            updateProgressBar($sliderBlock.find('.s-slider--progress'), $button1.position().left, $button2.position().left);

            const valueText = $('.double-slider--value--text').eq(dividerIndex).text();
            $button.find('.s-slider--percentage--percentage--text').text(valueText);

            if (isButton1) {
                if (dividerIndex === 0) $('.sm--graph--block--1').css('width', '0%')
                else if (dividerIndex === 1) $('.sm--graph--block--1').css('width', '23%')
                else if (dividerIndex === 2) $('.sm--graph--block--1').css('width', '48%')
                else if (dividerIndex === 3) {
                    $('.sm--graph--block--1').css('width', '73%')
                    $('.slider-button--1').css('z-index', '0')
                }
                else if (dividerIndex === 4) {
                    $('.sm--graph--block--1').css('width', '100%')
                    $('.slider-button--1').css('z-index', '20')
                }
                $('#claims-min--amount').val($('#special-slider--min-amount').text())
                answers[4].minValue = $('#special-slider--min-amount').text();

                //$('.claims-min--amount')
            } else if (isButton2) {
                if (dividerIndex === 0) $('.sm--graph--block--2').css('width', '100%%')
                else if (dividerIndex === 1) $('.sm--graph--block--2').css('width', '75%')
                else if (dividerIndex === 2) $('.sm--graph--block--2').css('width', '50%')
                else if (dividerIndex === 3) $('.sm--graph--block--2').css('width', '25%')
                else if (dividerIndex === 4) $('.sm--graph--block--2').css('width', '0%')
                $('#claims-max--amount').val($('#special-slider--max-amount').text())
                answers[4].maxValue = $('#special-slider--max-amount').text();
            }

        };


        $('.s-slider--block.double').each(function () {
            const $sliderBlock = $(this);
            const $button1 = $sliderBlock.find('.slider-button--1');
            const $button2 = $sliderBlock.find('.slider-button--2');

            $button1.draggable({
                axis: 'x',
                containment: $sliderBlock,
                drag: function (event, ui) {
                    handleDrag(ui, $button1, true, $button1, $button2, $sliderBlock);
                }
            });

            $button2.draggable({
                axis: 'x',
                containment: $sliderBlock,
                drag: function (event, ui) {
                    handleDrag(ui, $button2, false, $button1, $button2, $sliderBlock);
                }
            });
        });



    }

    //State Checkers

    const checkState1 = () => {
        $('.error-bubble--message').text('Please provide us with your Gross Written Premium and Loss Ratio to proceed')
        $('#Gross-Written-Premium').on('input', () => {
            let grossWrittenPremium = $('#Gross-Written-Premium').val().trim();
            let lossRatio = $('#What-Is-Your-Loss-Ratio-percentage').val().trim();

            if (grossWrittenPremium !== '' && lossRatio !== '') {
                if (!($('.error-bubble').hasClass('hidden'))) $('.error-bubble').addClass('hidden');
                if (!($('.quiz--error-mask').hasClass('hidden'))) $('.quiz--error-mask').addClass('hidden');
            } else {
                $('.error-bubble').removeClass('hidden');
                $('.quiz--error-mask').removeClass('hidden')
                $('.error-bubble--message').text('Please select your Loss Ratio before proceeding')
            }
        });
        $('.sm-slider--progress--button').on('mousedown', () => {
            let grossWrittenPremium = $('#Gross-Written-Premium').val().trim();
            if (grossWrittenPremium !== '') {
                if (!($('.error-bubble').hasClass('hidden'))) $('.error-bubble').addClass('hidden');
                if (!($('.quiz--error-mask').hasClass('hidden'))) $('.quiz--error-mask').addClass('hidden');
            } else {
                $('.error-bubble').removeClass('hidden');
                $('.quiz--error-mask').removeClass('hidden')

                $('.error-bubble--message').text('Please add your Gross Written Premium before proceeding')

            }
        });
    }

    const checkState2 = () => {
        $('.error-bubble--message').text('Please answer before proceeding')
        $('#annual-insurance-premium').on('input', () => {
            let annualInsurancePremium = $('#annual-insurance-premium').val().trim();

            if (annualInsurancePremium !== '') {
                if (!($('.error-bubble').hasClass('hidden'))) $('.error-bubble').addClass('hidden');
                if (!($('.quiz--error-mask').hasClass('hidden'))) $('.quiz--error-mask').addClass('hidden');
            } else {
                $('.error-bubble').removeClass('hidden');
                $('.quiz--error-mask').removeClass('hidden')
            }
        });
    }

    const checkState4 = () => {
        $('.error-bubble--message').text('Please select at least one policy')
        $('.coverage-wrapper--grid').on('click', () => {
            console.log('dasdas')

            setTimeout(() => {
                if ($('.coverage-wrapper--grid').find('.w--redirected-checked').length > 0 || ($('#Other-Coverage').val().trim() !== '')) {
                    if (!($('.error-bubble').hasClass('hidden'))) $('.error-bubble').addClass('hidden');
                    if (!($('.quiz--error-mask').hasClass('hidden'))) $('.quiz--error-mask').addClass('hidden');
                } else {

                    $('.error-bubble').removeClass('hidden');
                    $('.quiz--error-mask').removeClass('hidden')
                }
            }, 200);

        })

    }


    $('.sm--button').on('click', (e) => {
        let clickedButton = $(e.target).closest('.sm--button')
        console.log('min: ', $('#special-slider--min-amount').text())
        console.log('max: ', $('#special-slider--max-amount').text())
        $('#claims-min--amount').val($('#special-slider--min-amount').text())
        $('#claims-max--amount').val($('#special-slider--max-amount').text())
        //resetting buttons state
        $('.sm--unsure').removeClass('hidden')
        $('.next').removeClass('hidden')
        if (!($('.sm-button--submit').hasClass('hidden'))) $('.sm-button--submit').addClass('hidden')
        if (!($('.block--9').hasClass('hidden'))) $('.block--9').addClass('hidden')
        if (!($('.input-wrapper').hasClass('hidden'))) $('.input-wrapper').addClass('hidden')



        if (clickedButton.hasClass('next') || clickedButton.hasClass('sm--unsure') || clickedButton.hasClass('yes') || clickedButton.hasClass('no')) {

            // always reset next and back button mask
            if (!($('.quiz--error-mask').hasClass('hidden'))) $('.quiz--error-mask').addClass('hidden');

            if (clickedButton.hasClass('no')) {
                //save answer
                answers[0].value = 'No'

                state++
                $('.input-wrapper').eq(state - 1).addClass('hidden')
                $('.input-wrapper').eq(state).removeClass('hidden')

                $('.sm-heading--wrapper').eq(state - 1).addClass('hidden')
                $('.sm-heading--wrapper').eq(state).removeClass('hidden')
                isSpecialPage = false
                isQuestion2 = true
            } else if (clickedButton.hasClass('yes')) {
                //save answer
                answers[0].value = 'Yes'

                isSpecialPage = true
                isQuestion2 = false
                $('#embedded-insurance-wrapper').trigger('click')
            }

            state++;
            console.log('state: ', state);

            if (state === 1) {
                $('.sm-buttons--wrapper').removeClass('hidden')

                // regardless if the answer is yes or no, we can show the error-mask
                $('.quiz--error-mask').removeClass('hidden')
                $('.error-bubble').removeClass('hidden')
                if (isSpecialPage) {
                    checkState1();

                }
            } else if (state === 2) {
                if (isQuestion2) {
                    $('.quiz--error-mask').removeClass('hidden')
                    $('.error-bubble').removeClass('hidden')
                    checkState2();
                }

                $('.sm-buttons--wrapper').removeClass('hidden')
                if (!isQuestion2) {
                    $('.input-wrapper').eq(state - 1).addClass('hidden')
                    $('.input-wrapper').eq(state).removeClass('hidden')

                    $('.sm-heading--wrapper').eq(state - 1).addClass('hidden')
                    $('.sm-heading--wrapper').eq(state).removeClass('hidden')

                    state++
                }
            }

            //visibility 
            $('.input-wrapper').eq(state - 1).addClass('hidden')
            $('.input-wrapper').eq(state).removeClass('hidden')

            $('.sm-heading--wrapper').eq(state - 1).addClass('hidden')
            $('.sm-heading--wrapper').eq(state).removeClass('hidden')

            if (state === 3) {
                var parsedPremium = parseInsurancePremium();
                specialSliderHandler(parsedPremium);

            } else if (state === 4) {
                $('.quiz--error-mask').removeClass('hidden')

                //state checker
                $('.quiz--error-mask').removeClass('hidden')
                $('.error-bubble').removeClass('hidden')

                checkState4();

            } else if (state === 5) {
                if (!Boolean($('.sm-dropdown--input--value').val())) {

                    $('.quiz--error-mask').removeClass('hidden')
                    $('.error-bubble').removeClass('hidden')
                    $('.error-bubble--message').text('Choose an Industry to continue')
                }
                $('.s-field--dropdown--option').on('click', function () {
                    if (!($('.quiz--error-mask').hasClass('hidden'))) $('.quiz--error-mask').addClass('hidden')
                    if (!($('.error-bubble').hasClass('hidden'))) $('.error-bubble').addClass('hidden')
                });

            } else if (state === 7) {
                $('.quiz--error-mask').removeClass('hidden')

            } else if (state === 8) {
                if (!($('.sm--unsure').hasClass('hidden'))) $('.sm--unsure').addClass('hidden')
                if (!($('.next').hasClass('hidden'))) $('.next').addClass('hidden')
                $('.sm-button--submit').removeClass('hidden')

                answers[1].value = $('#Gross-Written-Premium').val();
                answers[3].value = $('#annual-insurance-premium').val();
                answers[4].minValue = $('#special-slider--min-amount').text();
                answers[4].maxValue = $('#special-slider--max-amount').text();
                answers[5].other = $('#Other-Coverage').val();
                answers[6].value = $('#Primary-Industry').val();
                answers[8].value = $('#name').val();
                answers[9].value = $('#company').val();
                answers[10].value = $('#email').val();
                answers[11].value = $('#phone').val();

                console.log(answers)

                resultsBuilder();
            }



        } else if (clickedButton.hasClass('back')) {
            if (!($('.quiz--error-mask').hasClass('hidden'))) $('.quiz--error-mask').addClass('hidden');

            if (state === 2) {
                if (!isSpecialPage) state--

                //visibility 
                $('.input-wrapper').eq(state + 1).addClass('hidden')
                $('.input-wrapper').eq(state).removeClass('hidden')

                $('.sm-heading--wrapper').eq(state + 1).addClass('hidden')
                $('.sm-heading--wrapper').eq(state).removeClass('hidden')
            }

            state--;

            console.log('state: ', state);

            if (state === 2) {

                if (!isQuestion2) {
                    console.log('dsds')


                    //visibility 
                    $('.input-wrapper').eq(state + 1).addClass('hidden')
                    $('.input-wrapper').eq(state).removeClass('hidden')

                    $('.sm-heading--wrapper').eq(state + 1).addClass('hidden')
                    $('.sm-heading--wrapper').eq(state).removeClass('hidden')

                    state--

                }
            }

            if (state === 0) {
                if (!($('.sm-buttons--wrapper').hasClass('hidden'))) $('.sm-buttons--wrapper').addClass('hidden')
            }

            //visibility 
            $('.input-wrapper').eq(state + 1).addClass('hidden')
            $('.input-wrapper').eq(state).removeClass('hidden')

            $('.sm-heading--wrapper').eq(state + 1).addClass('hidden')
            $('.sm-heading--wrapper').eq(state).removeClass('hidden')


        }


    });


    const answersHelper = () => {
        /* 
        Some answers are not being saved here:
        0, 2, 4, 6
        */

        function handleCheckboxChange() {
            // Reset the array
            coverageArray = [];

            // Loop through each checked checkbox
            $('.coverage-wrapper--grid input[type="checkbox"]:checked').each(function () {
                // Get the sibling .s-coverage--checkbox--text element and its text
                var coverageText = $(this).siblings('.s-coverage--checkbox--text').text();

                // Add the text to the array
                coverageArray.push(coverageText);
            });

            answers[5].values = coverageArray
            // Log the array for demonstration
        }

        function handleInterestCheckboxChange() {
            // Reset the array
            interestArray = [];

            // Loop through each checked checkbox
            $('.interest-wrapper--grid input[type="checkbox"]:checked').each(function () {
                // Get the sibling .s-interest--checkbox--text element and its text
                var interestText = $(this).siblings('.s-interest--checkbox--text').text();

                // Add the text to the array
                interestArray.push(interestText);
            });

            answers[7].values = interestArray
            // Log the array for demonstration
        }

        $('.coverage-wrapper--grid').on('change', 'input[type="checkbox"]', handleCheckboxChange);
        $('.interest-wrapper--grid').on('change', 'input[type="checkbox"]', handleInterestCheckboxChange);


    }


    let dropdownHandler = () => {
        // ... your existing code ...

        // Show the dropdown list when clicking on .s-field--dropdown
        $('.input-wrapper').on('click', '.s-field--dropdown', function (event) {
            event.stopPropagation();
            const dropdownList = $(event.currentTarget).find('.sm-field--dropdown--list');
            dropdownList.show();
            dropdownList.css('opacity', '100%');
        });

        // Hide the dropdown list when clicking anywhere else on the screen
        $(document).on('click', function () {
            const dropdownLists = $('.sm-field--dropdown--list');

            dropdownLists.css('opacity', '0%');
            dropdownLists.hide();
        });

        // Update the text value when clicking on an option
        $('.input-wrapper').on('click', '.s-field--dropdown--option', function (event) {
            event.stopPropagation();
            const selectedText = $(event.currentTarget).text();
            const dropdownPlaceholder = $(event.currentTarget).closest('.s-field--dropdown').find('.sm-field--dropdown--placeholder');
            dropdownPlaceholder.text(selectedText);
            const realInput = $(event.currentTarget).closest('.s-field--dropdown').siblings('.sm-dropdown--input--value')
            realInput.val(selectedText);

            const currentDropdownList = $(event.currentTarget).closest('.sm-field--dropdown--list');
            currentDropdownList.css('opacity', '0%');
            currentDropdownList.hide();
        });

    }


    function formatNumberInput($input) {
        $input.on('input', function () {
            // Store the current cursor position
            var cursorPos = this.selectionStart;

            // Get the value without dollar sign, commas, and other non-numeric characters
            var value = $(this).val().replace(/[^0-9.]/g, '');

            // Count the number of non-numeric characters before the cursor position to adjust the cursor later
            var beforeCursor = $(this).val().substr(0, cursorPos);
            var nonNumericBeforeCursor = beforeCursor.replace(/[0-9.]/g, '').length;

            // Check if value is empty or not
            if (value) {
                // Format the number with commas
                var formattedValue = parseFloat(value).toLocaleString('en-US', {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 0,
                    useGrouping: true
                });
                $(this).val(formattedValue);
            } else {
                // If value is empty or NaN, do nothing
            }

            // Count the number of non-numeric characters before the cursor position after formatting
            var afterCursor = $(this).val().substr(0, cursorPos + 1);
            var nonNumericAfterCursor = afterCursor.replace(/[0-9.]/g, '').length;

            // Calculate the new cursor position
            cursorPos += (nonNumericAfterCursor - nonNumericBeforeCursor);

            // Restore the cursor position at the end
            this.setSelectionRange(this.value.length, this.value.length);
        });
    }

    function formatDollarInput($input) {
        $input.on('input', function () {
            // Store the current cursor position
            var cursorPos = this.selectionStart;

            // Get the value without dollar sign, commas, and other non-numeric characters
            var value = $(this).val().replace(/[^0-9.]/g, '');

            // Count the number of non-numeric characters before the cursor position to adjust the cursor later
            var beforeCursor = $(this).val().substr(0, cursorPos);
            var nonNumericBeforeCursor = beforeCursor.replace(/[0-9.]/g, '').length;

            // Check if value is empty or not
            if (value) {
                // Format the number with commas
                var formattedValue = parseFloat(value).toLocaleString('en-US', {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 0,
                    useGrouping: true
                });
                $(this).val('$' + formattedValue);
            } else {
                // If value is empty or NaN, keep the dollar sign
                $(this).val('$');
            }

            // Count the number of non-numeric characters before the cursor position after formatting
            var afterCursor = $(this).val().substr(0, cursorPos + 1);
            var nonNumericAfterCursor = afterCursor.replace(/[0-9.]/g, '').length;

            // Calculate the new cursor position
            cursorPos += (nonNumericAfterCursor - nonNumericBeforeCursor);

            // Restore the cursor position
            this.setSelectionRange(cursorPos, cursorPos);
        });
    }

    function parseInsurancePremium() {
        let value
        if (Boolean($('#annual-insurance-premium').val())) value = $('#annual-insurance-premium').val();
        else if (Boolean($('#Gross-Written-Premium').val())) value = $('#Gross-Written-Premium').val();
        else {
            console.log('hi there')
            value = 0;
        }
        if (value !== 0) var parsedValue = value.replace(/[^0-9]/g, '');  // Remove any character that is not a digit
        else parsedValue = 0;

        return parseInt(parsedValue, 10);  // Convert the cleaned string to an integer
    }


    function initializeSlider() {
        $(document).ready(function () {
            $('.sm-slider--progress--button').each(function () {
                var $button = $(this);
                var $sliderBlock = $button.closest('.sm-slider--block');
                var $labelText = $button.find('.sm-slider--percentage--percentage--text');
                var $progressBar = $button.siblings('.sm-slider--progress');
                var $percentageInput = $('.sm-percentage--input');

                var initialLeft = $sliderBlock.width() * 0;
                $button.css('left', initialLeft);
                $progressBar.css('width', initialLeft + 'px');

                $button.draggable({
                    axis: 'x',
                    containment: $sliderBlock,
                    drag: function (event, ui) {
                        var totalWidth = $sliderBlock.width() - $button.width();
                        var currentWidth = ui.position.left;
                        var percentage = Math.round((currentWidth / totalWidth) * 100);
                        percentage = percentage > 100 ? 100 : percentage;
                        $labelText.text(percentage + '%');
                        $percentageInput.val(percentage + '%');
                        // Assuming `answers` is a predefined variable, ensure it is updated properly here.
                        // answers[2].value = percentage + '%'; // Uncomment this line if needed.
                        $progressBar.css('width', ui.position.left + 'px');
                    }
                });
            });

            $('.sm-slider--progress--button').on('mousedown touchstart', function (e) {
                var $target = $(e.target).closest('.sm-slider--progress--button');
                $target.addClass('active');
                $target.find('.sm-slider--percentage--percentage--text').addClass('active');
                $target.siblings('.sm-slider--progress').addClass('active');
            });
        });
    }


    function resultsNavigator() {
        $('.s-label--results').on('click', (e) => {
            let clickedButton = $(e.target)
            if (clickedButton.is('#state--1')) {
                state = 1;
                $('.back').trigger('click');

            } else if (clickedButton.is('#state--1a')) {
                state = 2;
                $('.back').trigger('click');
            } else if (clickedButton.is('#state--1b')) {
                state = 2;
                $('.back').trigger('click');
            } else if (clickedButton.is('#state--2')) {
                state = 3;
                $('.back').trigger('click');
            } else if (clickedButton.is('#state--3')) {
                state = 4;
                $('.back').trigger('click');
            } else if (clickedButton.is('#state--4')) {
                state = 5;
                $('.back').trigger('click');
            } else if (clickedButton.is('#state--5')) {
                state = 6;
                $('.back').trigger('click');
            } else if (clickedButton.is('#state--6')) {
                state = 7;
                $('.back').trigger('click');
            } else if (clickedButton.is('#state--7')) {
                state = 8;
                $('.back').trigger('click');
            }
        })
    }

    function deleteUnusedRisks() {
        $('.s-coverage--checkbox').each(function (index, element) {
            var checkbox = $(element).find('input[type="checkbox"]');

            if (checkbox.is(':checked')) {
            } else {
                $(element).remove();
            }
        });


        $('.s-interest--checkbox').each(function (index, element) {
            var checkbox = $(element).find('input[type="checkbox"]');


            if (checkbox.is(':checked')) {
            } else {
                $(element).remove();
            }
        });
    }

    $('.sm-button--submit').on('click', (e) => {
        state = 8;
        $('.next').trigger('click');
        $('.sm-buttons--wrapper').remove()
        deleteUnusedRisks();

    })

    //if user is logged in, retrieve contact information
    const loggedInHandler = async () => {
        const auth0Client = await auth0.createAuth0Client({
            domain: "login.xn.capital",
            clientId: "NoSXDnJTyhvN9uXGuAbqkCXeEdf15DzV",
            authorizationParams: {
                audience: "https://server.xn.capital"
            },
        });
        console.log("created client");

        const user = await auth0Client.getUser();
        if (user !== undefined) {


            const token = await auth0Client.getTokenSilently();
            $.ajax({
                url: `https://server.xn.capital/api/users/profile`,
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                success: function (response) {
                    let userDb = response.matchedUser.user; //DB user info
                    if (userDb.quiz_answers) {
                        console.log(userDb)
                        let quiz = userDb.quiz_answers
                        let name = quiz.question7.name;
                        let email = quiz.question7.email;
                        let phone = quiz.question7.phone
                        let company = quiz.question7.companyName
                        $('#name').val(name)
                        $('#company').val(company)
                        $('#email').val(email)
                        $('#phone').val(phone)
                    }
                },
                error: function (xhr, status, error) {
                    console.error('User info retrieval failed:', error);
                }
            });
        }
    }



    // Call the function to initialize the sliders
    loggedInHandler();
    initializeSlider();
    if (!($('.sm-buttons--wrapper').hasClass('hidden'))) $('.sm-buttons--wrapper').addClass('hidden')
    answersHelper();
    dropdownHandler();
    resultsNavigator();

    $('.number-input').each(function () {
        formatNumberInput($(this));
    });
    $('.dollar-input').each(function () {
        formatDollarInput($(this));
    });



});
