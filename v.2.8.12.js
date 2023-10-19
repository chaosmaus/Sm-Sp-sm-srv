





$(document).ready(() => {

    let state = 0;
    let timer;
    let inputsFilled = false;
    let isPolicy = false;
    let state8 = true;




    states =
        [
            {//1
                rightPanelV2: false,

                rightPanel: false,
                backButton: false,
                rightPanelContent: {
                    headerHeading: '7000',
                    headerDescription: 'of the Fortune 500 have at least 1 captive ',
                },
                headerHeading: 'Contact Info',
                headerDescription: '',

            },
            {//2
                rightPanelV2: false,

                rightPanel: false,
                backButton: true,
                rightPanelContent: {
                    headerHeading: '7000',
                    headerDescription: 'of the Fortune 500 have at least 1 captive ',
                },
                headerHeading: 'Business Info',
                headerDescription: '',

            }, {//3
                rightPanelV2: false,

                rightPanel: false,
                backButton: true,
                rightPanelContent: {
                    headerHeading: '7000',
                    headerDescription: 'of the Fortune 500 have at least 1 captive ',
                },
                headerHeading: 'Exposure: Payroll & Revenue',
                headerDescription: 'Please provide as much information as possible. General approximations are acceptable. If you do not know the answer to a question, feel free to skip it.',

            }, {//4
                rightPanelV2: false,

                rightPanel: false,
                backButton: true,
                rightPanelContent: {
                    headerHeading: '7000',
                    headerDescription: 'of the Fortune 500 have at least 1 captive ',
                },
                headerHeading: 'Exposure: Customers & Suppliers',
                headerDescription: 'Please provide as much information as possible. General approximations are acceptable. If you do not know the answer to a question, feel free to skip it.',

            }, {//5
                rightPanelV2: true,
                rightPanel: true,
                backButton: true,
                rightPanelContent: {
                    headerHeading: '7000',
                    headerDescription: 'of the Fortune 500 have at least 1 captive ',
                },
                headerHeading: 'Financial Statement',
                headerDescription: 'Please provide the most recent audited or consolidated financial statement',

            }, {//6
                rightPanelV2: true,
                rightPanel: true,
                backButton: true,
                rightPanelContent: {
                    headerHeading: 'none',
                    headerDescription: 'none',
                },
                headerHeading: 'Licensing & Regulation',
                headerDescription: 'Please provide as much information as possible. General approximations are acceptable. If you do not know the answer to a question, feel free to skip it.',

            }, {//7
                rightPanelV2: false,

                rightPanel: false,
                backButton: true,
                rightPanelContent: {
                    headerHeading: 'none',
                    headerDescription: 'none',
                },
                headerHeading: 'Current Insurance Coverage',
                headerDescription: 'Please provide as much information as possible. General approximations are acceptable. If you do not know the answer to a question, feel free to skip it.',

            }, {//8
                rightPanelV2: false,

                rightPanel: false,
                backButton: true,
                rightPanelContent: {
                    headerHeading: 'none',
                    headerDescription: 'none',
                },
                headerHeading: 'Insurance Coverage',
                headerDescription: 'For each coverage, enter the amount in annual premium and deductible ($)',

            }, {//9
                rightPanelV2: false,

                rightPanel: false,
                backButton: true,
                rightPanelContent: {
                    headerHeading: 'none',
                    headerDescription: 'none',
                },
                headerHeading: 'Insurance Applications & Policies',
                headerDescription: '',

            }, {//10
                rightPanelV2: true,
                rightPanel: false,
                backButton: true,
                rightPanelContent: {
                    headerHeading: 'none',
                    headerDescription: 'none',
                },
                headerHeading: 'Loss History',
                headerDescription: '',

            }, {//11
                rightPanelV2: true,
                rightPanel: true,
                backButton: true,
                rightPanelContent: {
                    headerHeading: 'none',
                    headerDescription: 'none',
                },
                headerHeading: 'Loss Prevention Measures',
                headerDescription: 'Use the space below to share more detail about how your business has responded to past claims. This can include high-level risk management strategy, corrective actions post-claim, and any notes from your insurer.',

            }, {//12
                rightPanelV2: true,
                rightPanel: false,
                backButton: true,
                rightPanelContent: {
                    headerHeading: 'none',
                    headerDescription: 'none',
                },
                headerHeading: 'Risks',
                headerDescription: 'Select all the risks that apply to your business. You do not need to have current coverage for a risk in order to select it.',

            }, {//13
                rightPanelV2: false,
                rightPanel: false,
                backButton: true,
                rightPanelContent: {
                    headerHeading: 'none',
                    headerDescription: 'none',
                },
                headerHeading: 'Risks',
                headerDescription: 'Please indicate if each risk is currently covered by an existing insurance policy. Then, drag the sliders for each risk to indicate how costly the average loss is for that risk, and how often you experience those losses',

            }, {//14
                rightPanelV2: true,
                rightPanel: true,
                backButton: true,
                rightPanelContent: {
                    headerHeading: '$10.1 B',
                    headerDescription: 'The amount saved since 2017 by companies using captives',
                },
                headerHeading: 'Risk Horizons',
                headerDescription: `We want to understand how your businesses is thinking about the future.`,

            }, {//15
                rightPanelV2: true,
                rightPanel: true,
                backButton: true,
                rightPanelContent: {
                    headerHeading: '$10.1 B',
                    headerDescription: 'The amount saved since 2017 by companies using captives',
                },
                headerHeading: 'Submit Results',
                headerDescription: `You finished the survey! If you’d like to make any changes, please do so before submitting. You can use the progress bar to jump to any section of the survey.`,

            }, {//16
                rightPanelV2: false,
                rightPanel: false,
                backButton: false,
                rightPanelContent: {
                    headerHeading: '$10.1 B',
                    headerDescription: 'The amount saved since 2017 by companies using captives',
                },
                headerHeading: 'Thank you, we received your submission.',
                headerDescription: `Thank you, we received your submission.`,

            },
            {//17
                rightPanelV2: false,
                rightPanel: false,
                backButton: false,
                rightPanelContent: {
                    headerHeading: 'empty',
                    headerDescription: 'empty',
                },
                headerHeading: 'Thank you, we received your submission.',
                headerDescription: `Thank you, we received your submission.`,

            },

        ]


    let rightPanelHeading = $('.s-info-panel--heading');
    let rightPanelDescription = $('.s-info-panel--description');

    let surveyHeading = $('.s-heading');
    let surveyDescription = $('.s-description');


    // Buttons Listeners
    function updateUploadInputVisibility(target) {
        var $inputWrapper = $(target).closest('.input-wrapper');
        var $toggleableBlocked = $inputWrapper.find('.inputs--toggleable--blocked');

        if ($toggleableBlocked.hasClass('hidden')) {
            $toggleableBlocked.removeClass('hidden');

        }
        else {
            $toggleableBlocked.addClass('hidden');

        }
    }

    $('.upload--input').on('click', (e) => {
        setTimeout(() => {
            updateUploadInputVisibility($(e.target));
        }, 0);


    })

    $('.s-checkbox--upload--text').on('click', (e) => {
        setTimeout(() => {
            updateUploadInputVisibility($(e.target));
        }, 0);

    })



    // Buttons Listeners
    // remove unused texst inputs if upload is selected
    function uploadInputsRemoval() {
        $('.upload--input.w--redirected-checked').each(function (index, element) {
            $(element).closest('.input-wrapper').find('.inputs--toggleable--wrapper').remove()
        });
    }







    let circleClassReset = () => {
        $('.circle--info-card--wrapper').css('display', 'none')
        $('.s-progress-bar--circle--small').removeClass('active--filled active--filled--radius');
        $('.s-progress-bar--circle--large').removeClass('active--filled active--filled--info--radius active--filled--info');
    }


    let progressBarHandler = (currentState) => {
        if (currentState === 0) {
            circleClassReset();
            $('#circle--2a').addClass('active--filled--info--radius');
            $('#circle--2a').find('.circle--info-card--wrapper').css('display', 'flex')
        } else if (currentState == 1) {
            circleClassReset();
            $('#circle--2a').addClass('active--filled');
            $('#circle--2b').find('.circle--info-card--wrapper').css('display', 'flex')
            $('#circle--2b').addClass('active--filled--info--radius');
        } else if (currentState == 2) {
            circleClassReset();
            $('#circle--2a').addClass('active--filled');
            $('#circle--2b').addClass('active--filled');
            $('#circle--3a').addClass('active--filled--info--radius');
            $('#circle--3a').find('.circle--info-card--wrapper').css('display', 'flex')
        } else if (currentState == 3) {
            circleClassReset();
            $('#circle--2a').addClass('active--filled');
            $('#circle--2b').addClass('active--filled');
            $('#circle--3a').addClass('active--filled--info');
            $('#circle--3b').addClass('active--filled--radius');
            $('#circle--3a').find('.circle--info-card--wrapper').css('display', 'flex')
        } else if (currentState == 4) {
            circleClassReset();
            $('#circle--2a').addClass('active--filled');
            $('#circle--2b').addClass('active--filled');
            $('#circle--3a').addClass('active--filled--info');
            $('#circle--3b').addClass('active--filled');
            $('#circle--3c').addClass('active--filled--radius');
            $('#circle--3a').find('.circle--info-card--wrapper').css('display', 'flex')
        } else if (currentState == 5) {
            circleClassReset();
            $('#circle--2a').addClass('active--filled');
            $('#circle--2b').addClass('active--filled');
            $('#circle--3a').addClass('active--filled--info');
            $('#circle--3b').addClass('active--filled');
            $('#circle--3c').addClass('active--filled');
            $('#circle--3d').addClass('active--filled--radius');
            $('#circle--3a').find('.circle--info-card--wrapper').css('display', 'flex')
        } else if (currentState == 6) {
            circleClassReset();
            $('#circle--2a').addClass('active--filled');
            $('#circle--2b').addClass('active--filled');
            $('#circle--3a').addClass('active--filled--info');
            $('#circle--3b').addClass('active--filled');
            $('#circle--3c').addClass('active--filled');
            $('#circle--3d').addClass('active--filled');
            $('#circle--3e').addClass('active--filled');
            $('#circle--4a').addClass('active--filled--info--radius');
            $('#circle--4a').find('.circle--info-card--wrapper').css('display', 'flex')
        } else if (currentState == 7) {
            circleClassReset();
            $('#circle--2a').addClass('active--filled');
            $('#circle--2b').addClass('active--filled');
            $('#circle--3a').addClass('active--filled--info');
            $('#circle--3b').addClass('active--filled');
            $('#circle--3c').addClass('active--filled');
            $('#circle--3d').addClass('active--filled');
            $('#circle--3e').addClass('active--filled');
            $('#circle--4a').addClass('active--filled');
            $('#circle--4b').addClass('active--filled--radius');
            $('#circle--4a').find('.circle--info-card--wrapper').css('display', 'flex')
        } else if (currentState == 8) {
            circleClassReset();
            $('#circle--2a').addClass('active--filled');
            $('#circle--2b').addClass('active--filled');
            $('#circle--3a').addClass('active--filled--info');
            $('#circle--3b').addClass('active--filled');
            $('#circle--3c').addClass('active--filled');
            $('#circle--3d').addClass('active--filled');
            $('#circle--3e').addClass('active--filled');
            $('#circle--4a').addClass('active--filled');
            $('#circle--4b').addClass('active--filled');
            $('#circle--4c').addClass('active--filled--radius');
            $('#circle--4a').find('.circle--info-card--wrapper').css('display', 'flex')
        } else if (currentState == 9) {
            circleClassReset();
            $('#circle--2a').addClass('active--filled');
            $('#circle--2b').addClass('active--filled');
            $('#circle--3a').addClass('active--filled--info');
            $('#circle--3b').addClass('active--filled');
            $('#circle--3c').addClass('active--filled');
            $('#circle--3d').addClass('active--filled');
            $('#circle--3e').addClass('active--filled');
            $('#circle--4a').addClass('active--filled');
            $('#circle--4b').addClass('active--filled');
            $('#circle--4c').addClass('active--filled');
            $('#circle--5a').addClass('active--filled--info--radius');
            $('#circle--5a').find('.circle--info-card--wrapper').css('display', 'flex')
        } else if (currentState == 10) {
            circleClassReset();
            $('#circle--2a').addClass('active--filled');
            $('#circle--2b').addClass('active--filled');
            $('#circle--3a').addClass('active--filled');
            $('#circle--3b').addClass('active--filled');
            $('#circle--3c').addClass('active--filled');
            $('#circle--3d').addClass('active--filled');
            $('#circle--3e').addClass('active--filled');
            $('#circle--4a').addClass('active--filled');
            $('#circle--4b').addClass('active--filled');
            $('#circle--4c').addClass('active--filled');
            $('#circle--5a').addClass('active--filled--info');
            $('#circle--5b').addClass('active--filled--radius');
            $('#circle--5a').find('.circle--info-card--wrapper').css('display', 'flex')
        } else if (currentState == 11) {
            circleClassReset();
            $('#circle--2a').addClass('active--filled');
            $('#circle--2b').addClass('active--filled');
            $('#circle--3a').addClass('active--filled');
            $('#circle--3b').addClass('active--filled');
            $('#circle--3c').addClass('active--filled');
            $('#circle--3d').addClass('active--filled');
            $('#circle--3e').addClass('active--filled');
            $('#circle--4a').addClass('active--filled');
            $('#circle--4b').addClass('active--filled');
            $('#circle--4c').addClass('active--filled');
            $('#circle--5a').addClass('active--filled');
            $('#circle--5b').addClass('active--filled');
            $('#circle--6a').addClass('active--filled--info--radius');
            $('#circle--6a').find('.circle--info-card--wrapper').css('display', 'flex')
        } else if (currentState == 12) {
            circleClassReset();
            $('#circle--2a').addClass('active--filled');
            $('#circle--2b').addClass('active--filled');
            $('#circle--3a').addClass('active--filled');
            $('#circle--3b').addClass('active--filled');
            $('#circle--3c').addClass('active--filled');
            $('#circle--3d').addClass('active--filled');
            $('#circle--3e').addClass('active--filled');
            $('#circle--4a').addClass('active--filled');
            $('#circle--4b').addClass('active--filled');
            $('#circle--4c').addClass('active--filled');
            $('#circle--5a').addClass('active--filled');
            $('#circle--5b').addClass('active--filled');
            $('#circle--6a').addClass('active--filled--info');
            $('#circle--6b').addClass('active--filled--radius');
            $('#circle--6a').find('.circle--info-card--wrapper').css('display', 'flex')
        }  else if (currentState == 13) {
            circleClassReset();
            $('#circle--2a').addClass('active--filled');
            $('#circle--2b').addClass('active--filled');
            $('#circle--3a').addClass('active--filled');
            $('#circle--3b').addClass('active--filled');
            $('#circle--3c').addClass('active--filled');
            $('#circle--3d').addClass('active--filled');
            $('#circle--3e').addClass('active--filled');
            $('#circle--4a').addClass('active--filled');
            $('#circle--4b').addClass('active--filled');
            $('#circle--4c').addClass('active--filled');
            $('#circle--5a').addClass('active--filled');
            $('#circle--5b').addClass('active--filled');
            $('#circle--6a').addClass('active--filled--info');
            $('#circle--6b').addClass('active--filled');
            $('#circle--6c').addClass('active--filled--radius');
            $('#circle--6a').find('.circle--info-card--wrapper').css('display', 'flex')
        } else if (currentState == 14) {
            circleClassReset();
            $('#circle--2a').addClass('active--filled');
            $('#circle--2b').addClass('active--filled');
            $('#circle--3a').addClass('active--filled--info');
            $('#circle--3b').addClass('active--filled');
            $('#circle--3c').addClass('active--filled');
            $('#circle--3d').addClass('active--filled');
            $('#circle--3e').addClass('active--filled');
            $('#circle--4a').addClass('active--filled');
            $('#circle--4b').addClass('active--filled');
            $('#circle--4c').addClass('active--filled');
            $('#circle--5a').addClass('active--filled');
            $('#circle--5b').addClass('active--filled');
            $('#circle--6a').addClass('active--filled');
            $('#circle--6b').addClass('active--filled');
            $('#circle--6c').addClass('active--filled');
            $('#circle--7').addClass('active--filled--info--radius');
            $('#circle--7').find('.circle--info-card--wrapper').css('display', 'flex')
        }else if (currentState == 15) {
            circleClassReset();
            $('#circle--2a').addClass('active--filled');
            $('#circle--2b').addClass('active--filled');
            $('#circle--3a').addClass('active--filled--info');
            $('#circle--3b').addClass('active--filled');
            $('#circle--3c').addClass('active--filled');
            $('#circle--3d').addClass('active--filled');
            $('#circle--3e').addClass('active--filled');
            $('#circle--4a').addClass('active--filled');
            $('#circle--4b').addClass('active--filled');
            $('#circle--4c').addClass('active--filled');
            $('#circle--5a').addClass('active--filled');
            $('#circle--5b').addClass('active--filled');
            $('#circle--6a').addClass('active--filled');
            $('#circle--6b').addClass('active--filled');
            $('#circle--6c').addClass('active--filled');
            $('#circle--7').addClass('active--filled');
            $('#circle--8').addClass('active--filled--info--radius');
            $('#circle--8').find('.circle--info-card--wrapper').css('display', 'flex')
        }

    }



    //progress bar navigation:
    const progressBarNavigator = () => {



        if (state === 12) {
            $('.s-button.next').hide();
            $('.s-button--submit').removeClass('hidden');
            $('.s-progress--download-button').hide()
        } else {
            $('.s-button.next').show();
            if (!($('.s-button--submit').hasClass('hidden'))) $('.s-button--submit').addClass('hidden');
            $('.s-progress--download-button').show()

        }


        if (state === 6) {
            $('.s-info-panel--rich-text.financial-statements').show()
            $('.s-info-panel--rich-text.current-insurance-coverage').hide()
            $('.s-info-panel--rich-text.loss-history').hide()
            $('.s-info-panel--rich-text.licensing-regulation').hide()
        } else if (state === 7) {
            $('.s-info-panel--rich-text.financial-statements').hide()
            $('.s-info-panel--rich-text.current-insurance-coverage').hide()
            $('.s-info-panel--rich-text.loss-history').hide()
            $('.s-info-panel--rich-text.licensing-regulation').show()
        } else if (state === 8) {
            $('.s-info-panel--rich-text.financial-statements').hide()
            $('.s-info-panel--rich-text.current-insurance-coverage').show()
            $('.s-info-panel--rich-text.loss-history').hide()
            $('.s-info-panel--rich-text.licensing-regulation').hide()
        } else if (state === 9) {
            $('.s-info-panel--rich-text.financial-statements').hide()
            $('.s-info-panel--rich-text.current-insurance-coverage').hide()
            $('.s-info-panel--rich-text.loss-history').show()
            $('.s-info-panel--rich-text.licensing-regulation').hide()
        }
        //inputsFilled = false;

        // copy for Right Panel
        rightPanelHeading.text(states[state].rightPanelContent.headerHeading)
        rightPanelDescription.text(states[state].rightPanelContent.headerDescription)

        // copy for Survey heading
        surveyHeading.text(states[state].headerHeading)
        surveyDescription.text(states[state].headerDescription)

        //right panel alternate version

        if (states[state].rightPanelV2 === true) {
            if (!($('.s-info-panel--content-wrapper').hasClass('hidden'))) $('.s-info-panel--content-wrapper').addClass('hidden');
            if (!($('.s-column--right').hasClass('v--2'))) $('.s-column--right').addClass('v--2');
            $('.s-info-panel--content-wrapper--alternate').removeClass('hidden');
        } else {
            if (!($('.s-info-panel--content-wrapper--alternate').hasClass('hidden'))) $('.s-info-panel--content-wrapper--alternate').addClass('hidden');
            $('.s-info-panel--content-wrapper').removeClass('hidden');
            $('.s-column--right').removeClass('v--2');
        }

        // visibility for Right Panel
        if (states[state].rightPanel === false) {
            if (!($('.s-column--right').hasClass('hidden'))) $('.s-column--right').addClass('hidden');
        } else {
            $('.s-column--right').removeClass('hidden');
        }

        // visibility for Right Panel
        if (states[state].backButton === false) {
            if (!($('.s-button.back').hasClass('hidden'))) $('.s-button.back').addClass('hidden');
        } else {
            $('.s-button.back').removeClass('hidden');
        }
        // progress bar handler
        progressBarHandler(state)

        //show prev input
        $('.input-wrapper').eq(state).removeClass('hidden')

    }

    //progress bar anvigator listeners:

    let progressBarNavigatorListeners = () => {
        $('#circle--2a').on('click', () => {
            //hide prev input
            $('.input-wrapper').eq(state).addClass('hidden')
            state = 0;
            progressBarNavigator();
        })
        $('#circle--2b').on('click', () => {
            //hide prev input
            $('.input-wrapper').eq(state).addClass('hidden')
            state = 1;
            progressBarNavigator();
        })
        $('#circle--3a').on('click', () => {
            //hide prev input
            $('.input-wrapper').eq(state).addClass('hidden')
            console.log('dadad')
            state = 2;
            progressBarNavigator();
        })
        $('#circle--3b').on('click', () => {
            //hide prev input
            $('.input-wrapper').eq(state).addClass('hidden')
            state = 3;
            progressBarNavigator();
        })
        $('#circle--3c').on('click', () => {
            //hide prev input
            $('.input-wrapper').eq(state).addClass('hidden')
            state = 4;
            progressBarNavigator();
        })
        $('#circle--3d').on('click', () => {
            //hide prev input
            $('.input-wrapper').eq(state).addClass('hidden')
            state = 5;
            progressBarNavigator();
        })
        $('#circle--4a').on('click', () => {
            //hide prev input
            $('.input-wrapper').eq(state).addClass('hidden')
            state = 6;
            progressBarNavigator();
        })
        $('#circle--4b').on('click', () => {
            //hide prev input
            $('.input-wrapper').eq(state).addClass('hidden')
            state = 7;
            progressBarNavigator();
        })
        $('#circle--4c').on('click', () => {
            //hide prev input
            $('.input-wrapper').eq(state).addClass('hidden')
            state = 8;
            progressBarNavigator();
        })
        $('#circle--5a').on('click', () => {
            //hide prev input
            $('.input-wrapper').eq(state).addClass('hidden')
            state = 9;
            progressBarNavigator();
        })
        $('#circle--5b').on('click', () => {
            //hide prev input
            $('.input-wrapper').eq(state).addClass('hidden')
            state = 10;
            progressBarNavigator();
        })
        $('#circle--6a').on('click', () => {
            //hide prev input
            $('.input-wrapper').eq(state).addClass('hidden')
            state = 11;
            progressBarNavigator();
        })
        $('#circle--6b').on('click', () => {
            //hide prev input
            $('.input-wrapper').eq(state).addClass('hidden')
            state = 12;
            progressBarNavigator();
        })
        $('#circle--6c').on('click', () => {
            //hide prev input
            $('.input-wrapper').eq(state).addClass('hidden')
            state = 13;
            progressBarNavigator();
        })
        $('#circle--7').on('click', () => {
            //hide prev input
            $('.input-wrapper').eq(state).addClass('hidden')
            state = 14;
            progressBarNavigator();
        })


    }





    $('.s-button').on('click', (e) => {



        let clickedButton = $(e.target).closest('.s-button');

        if (clickedButton.hasClass('next')) {
            if (!(clickedButton.hasClass('active'))) return;

            if (inputsFilled === false) return;




            state++;

            console.log('current state: ', state)

            if(state === 13) {
                $('.s-info-panel--rich-text.financial-statements').hide()
                $('.s-info-panel--rich-text.loss-history').hide()
                $('.s-info-panel--rich-text.licensing-regulation').hide()
                $('.s-info-panel--rich-text.loss-prevention-measures').hide()
                $('.s-info-panel--rich-text.current-insurance-coverage').hide()
                $('.s-info-panel--rich-text.risks-horizon').show()
            }


            if (state === 12) {
                $('.slider--wrapper').each((index, element) => {
                    if (index > 0) $(element).remove();
                })
                processDynamicRisks();
                $("#first-risk-block").hide()
            } else if (state === 14) {
                progressBarNavigatorListeners();
                $('.s-button.next').hide();
                $('.s-button--submit').removeClass('hidden');
                $('.s-progress--download-button').hide()

            }

            if (state === 4) {
                $('.s-info-panel--rich-text.financial-statements').show()
                $('.s-info-panel--rich-text.loss-history').hide()
                $('.s-info-panel--rich-text.licensing-regulation').hide()
                $('.s-info-panel--rich-text.loss-prevention-measures').hide()
                $('.s-info-panel--rich-text.current-insurance-coverage').hide()
                $('.s-info-panel--rich-text.risks-horizon').hide()
            } else if (state === 5) {
                $('.s-info-panel--rich-text.financial-statements').hide()
                $('.s-info-panel--rich-text.loss-history').hide()
                $('.s-info-panel--rich-text.licensing-regulation').show()
                $('.s-info-panel--rich-text.loss-prevention-measures').hide()
                $('.s-info-panel--rich-text.current-insurance-coverage').hide()
                $('.s-info-panel--rich-text.risks-horizon').hide()
            } else if (state === 6) {

            } else if (state === 7) {

                $('.policies--input--row').each((index, element) => {
                    if (index > 0) $(element).remove();
                })
                // IF CONDITION MET
                processDynamicPolicies();
                if ($('.policies--input--row').length > 1) {
                } else {
                    $('.input-wrapper').eq(state - 1).addClass('hidden')
                    state++;
                }

            } else if (state === 8) {
            } else if (state === 10) {
                $('.s-info-panel--rich-text.financial-statements').hide()
                $('.s-info-panel--rich-text.loss-history').hide()
                $('.s-info-panel--rich-text.licensing-regulation').hide()
                $('.s-info-panel--rich-text.loss-prevention-measures').show()
                $('.s-info-panel--rich-text.current-insurance-coverage').hide()
                $('.s-info-panel--rich-text.risks-horizon').hide()
            }

            //console.log('testing return')
            //inputsFilled = false;

            // copy for Right Panel
            rightPanelHeading.text(states[state].rightPanelContent.headerHeading)
            rightPanelDescription.text(states[state].rightPanelContent.headerDescription)

            // copy for Survey heading
            surveyHeading.text(states[state].headerHeading)
            surveyDescription.text(states[state].headerDescription)

            //right panel alternate version

            if (states[state].rightPanelV2 === true) {
                if (!($('.s-info-panel--content-wrapper').hasClass('hidden'))) $('.s-info-panel--content-wrapper').addClass('hidden');
                if (!($('.s-column--right').hasClass('v--2'))) $('.s-column--right').addClass('v--2');
                $('.s-info-panel--content-wrapper--alternate').removeClass('hidden');
            } else {
                if (!($('.s-info-panel--content-wrapper--alternate').hasClass('hidden'))) $('.s-info-panel--content-wrapper--alternate').addClass('hidden');
                $('.s-info-panel--content-wrapper').removeClass('hidden');
                $('.s-column--right').removeClass('v--2');
            }

            // visibility for Right Panel
            if (states[state].rightPanel === false) {
                if (!($('.s-column--right').hasClass('hidden'))) $('.s-column--right').addClass('hidden');
            } else {
                $('.s-column--right').removeClass('hidden');
            }

            // visibility for Right Panel
            if (states[state].backButton === false) {
                if (!($('.s-button.back').hasClass('hidden'))) $('.s-button.back').addClass('hidden');
            } else {
                $('.s-button.back').removeClass('hidden');
            }
            // progress bar handler
            progressBarHandler(state)

            //esconder o input wrapper anterior
            $('.input-wrapper').eq(state - 1).addClass('hidden')
            //mostrar o input wrapper next
            $('.input-wrapper').eq(state).removeClass('hidden')
        } else if (clickedButton.hasClass('back')) {

            if (state === 13) {
                $('.s-button.next').show();
                if (!($('.s-button--submit').hasClass('hidden'))) $('.s-button--submit').addClass('hidden');
                $('.s-progress--download-button').show()

            }


            state--;
            inputsFilled = true;
            console.log('current state: ', state)

            if (state === 10) {
                $('.s-info-panel--rich-text.financial-statements').hide()
                $('.s-info-panel--rich-text.loss-history').hide()
                $('.s-info-panel--rich-text.licensing-regulation').hide()
                $('.s-info-panel--rich-text.loss-prevention-measures').show()
                $('.s-info-panel--rich-text.current-insurance-coverage').hide()
                $('.s-info-panel--rich-text.risks-horizon').hide()

                $('.s-field--row--wrapper.slider--wrapper').each((i, el) => {
                    if (i > 0) $(el).remove();
                })
            }
            
            if(state === 12) {
                $('.s-info-panel--rich-text.financial-statements').hide()
                $('.s-info-panel--rich-text.loss-history').hide()
                $('.s-info-panel--rich-text.licensing-regulation').hide()
                $('.s-info-panel--rich-text.loss-prevention-measures').hide()
                $('.s-info-panel--rich-text.current-insurance-coverage').hide()
                
                $('.s-info-panel--rich-text.risks-horizon').show()
            }


            if (state === 4) {
                $('.s-info-panel--rich-text.financial-statements').show()
                $('.s-info-panel--rich-text.loss-history').hide()
                $('.s-info-panel--rich-text.licensing-regulation').hide()
                $('.s-info-panel--rich-text.loss-prevention-measures').hide()
                $('.s-info-panel--rich-text.current-insurance-coverage').hide()
                $('.s-info-panel--rich-text.risks-horizon').hide()
            } else if (state === 5) {
                $('.s-info-panel--rich-text.financial-statements').hide()
                $('.s-info-panel--rich-text.loss-history').hide()
                $('.s-info-panel--rich-text.licensing-regulation').show()
                $('.s-info-panel--rich-text.loss-prevention-measures').hide()
                $('.s-info-panel--rich-text.current-insurance-coverage').hide()
                $('.s-info-panel--rich-text.risks-horizon').hide()

                $('.policies--input--row').each((i, el) => {
                    if (i > 0) $(el).remove();
                })


            } else if (state === 7) {
                $('.s-info-panel--rich-text.financial-statements').hide()
                $('.s-info-panel--rich-text.loss-history').hide()
                $('.s-info-panel--rich-text.licensing-regulation').hide()

                if ($('.policies--input--row').length > 1) {

                } else {
                    $('.input-wrapper').eq(state).addClass('hidden')
                    if (!($('.block--10').hasClass('hidden'))) $('.block--10').addClass('hidden')
                    state--;
                }


            } else if (state === 8) {
                if (!($('block--10').hasClass('hidden'))) $('block--10').addClass('hidden')
            }


            if (states[state].rightPanelV2 === true) {
                if (!($('.s-info-panel--content-wrapper').hasClass('hidden'))) $('.s-info-panel--content-wrapper').addClass('hidden');
                if (!($('.s-column--right').hasClass('v--2'))) $('.s-column--right').addClass('v--2');
                $('.s-info-panel--content-wrapper--alternate').removeClass('hidden');
            } else {
                if (!($('.s-info-panel--content-wrapper--alternate').hasClass('hidden'))) $('.s-info-panel--content-wrapper--alternate').addClass('hidden');
                $('.s-info-panel--content-wrapper').removeClass('hidden');
                $('.s-column--right').removeClass('v--2');
            }


            // copy for Right Panel
            rightPanelHeading.text(states[state].rightPanelContent.headerHeading)
            rightPanelDescription.text(states[state].rightPanelContent.headerDescription)

            // copy for Survey heading
            surveyHeading.text(states[state].headerHeading)
            surveyDescription.text(states[state].headerDescription)

            // visibility for Right Panel
            if (states[state].rightPanel === false) {
                if (!($('.s-column--right').hasClass('hidden'))) $('.s-column--right').addClass('hidden');
            } else {
                $('.s-column--right').removeClass('hidden');
            }

            // visibility for Right Panel
            if (states[state].backButton === false) {
                if (!($('.s-button.back').hasClass('hidden'))) $('.s-button.back').addClass('hidden');
            } else {
                $('.s-button.back').removeClass('hidden');
            }
            // progress bar handler
            progressBarHandler(state)

            //esconder o input wrapper anterior
            $('.input-wrapper').eq(state + 1).addClass('hidden')
            //mostrar o input wrapper next
            $('.input-wrapper').eq(state).removeClass('hidden')

        }






    })



    // Run every time the user types something in the form
    let checkInputsFilled = () => {
        let name = $('#name').val();
        let email = $('#email').val();
        let phone = $('#phone').val();

        if (name && email && phone) {

        } else {
            $('.error-bubble').removeClass('hidden');
            $('.error-bubble--message').text(`Empty field(s)`);
            $('.s-button.next').removeClass('active');
        }
    };

    $('#name, #email, #phone').on('input', function () {


        if (!($('.error-bubble').hasClass('hidden'))) $('.error-bubble').addClass('hidden');

        checkInputsFilled();

        // Clear the existing timer if it exists
        clearTimeout(timer);

        // Start a new timer that runs your function after 500ms
        timer = setTimeout(function () {
            let email = $('#email').val(); // Define email here to access it
            let isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

            if (isEmailValid) {
                // Continue with form submission or whatever action you want
                inputsFilled = true;
                if (!($('.s-button.next').hasClass('hidden'))) $('.s-button.next').addClass('active');
            } else {
                // Show error messages
                if (!isEmailValid) {
                    $('.error-bubble').removeClass('hidden');
                    $('.error-bubble--message').text(`Invalid format: Email`);
                    $('.s-button.next').removeClass('active');
                }
            }
        }, 500);  // 500ms delay; adjust as needed
    });


    function formatNumberInput($input) {
        $input.on('input', function () {
            // Store the current cursor position
            var cursorPos = this.selectionStart;

            // Get the value without dollar sign, commas, and other non-numeric characters
            var value = $(this).val().replace(/[^0-9.]/g, '');

            // Count the number of commas before the cursor position to adjust the cursor later
            var beforeCursor = $(this).val().substr(0, cursorPos);
            var commasBeforeCursor = (beforeCursor.match(/,/g) || []).length;

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
                // If value is empty or NaN, keep the dollar sign
                //$(this).val('$');
            }

            // Adjust the cursor position based on added/removed commas
            var afterCursor = $(this).val().substr(0, cursorPos);
            var newCommas = (afterCursor.match(/,/g) || []).length;
            cursorPos += (newCommas - commasBeforeCursor);

            // Restore the cursor position
            this.setSelectionRange(cursorPos, cursorPos);
        });
    }


    function formatPercentageInput($input) {
        $input.on('input', function () {
            // Store the current cursor position
            var cursorPos = this.selectionStart;

            // Get the value without the percentage sign and other non-numeric characters
            var value = $(this).val().replace(/[^0-9.]/g, '');

            // Count the number of commas before the cursor position to adjust the cursor later
            var beforeCursor = $(this).val().substr(0, cursorPos);
            var commasBeforeCursor = (beforeCursor.match(/,/g) || []).length;

            // Check if value is empty or not
            if (value) {
                // Format the number with commas
                var formattedValue = parseFloat(value).toLocaleString('en-US', {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 0,
                    useGrouping: true
                });
                $(this).val(formattedValue + '%');  // Add percentage sign at the end
            } else {
                // If value is empty or NaN, keep the percentage sign
                $(this).val('%');
            }

            // Adjust the cursor position based on added/removed commas
            var afterCursor = $(this).val().substr(0, cursorPos);
            var newCommas = (afterCursor.match(/,/g) || []).length;
            cursorPos += (newCommas - commasBeforeCursor);

            // Restore the cursor position
            this.setSelectionRange(cursorPos, cursorPos);
        });
    }


    function formatDollarInput($input) {
        $input.on('input', function () {
            // Store the current cursor position
            var cursorPos = this.selectionStart;

            // Get the value without dollar sign, commas, and other non-numeric characters
            var value = $(this).val().replace(/[^0-9.]/g, '');

            // Count the number of commas before the cursor position to adjust the cursor later
            var beforeCursor = $(this).val().substr(0, cursorPos);
            var commasBeforeCursor = (beforeCursor.match(/,/g) || []).length;

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

            // Adjust the cursor position based on added/removed commas
            var afterCursor = $(this).val().substr(0, cursorPos);
            var newCommas = (afterCursor.match(/,/g) || []).length;
            cursorPos += (newCommas - commasBeforeCursor);

            // Restore the cursor position
            this.setSelectionRange(cursorPos, cursorPos);
        });
    }


    let employeeListHandler = () => {

        let index = 1; // Start with 1 because 0 already exists in the HTML

        // Add another employee
        $('.s-new-input-field').click(function () {
            // Clone the first .s-field--row--wrapper
            const newRow = $('.input-wrapper.block--4').find('.s-field--row--wrapper').eq(0).clone();

            // Update the ID, name, and data-name attributes
            newRow.find('[id], [name], [data-name]').each(function () {
                const elem = $(this);
                elem.attr({
                    'id': elem.attr('id').replace('-0', `-${index}`),
                    'name': elem.attr('name').replace('-0', `-${index}`),
                    'data-name': elem.attr('data-name').replace('-0', `-${index}`)
                });
            });

            // Append the new row right after the last .s-field--row--wrapper
            newRow.insertAfter('.input-wrapper.block--4 .s-field--row--wrapper:last');

            // Increment the index for the next addition
            index++;
        });

        // Delete an employee (use event delegation)
        $('.input-wrapper').on('click', '.s-row--delete', function () {
            // Remove the closest .s-field--row--wrapper
            $(this).closest('.s-field--row--wrapper').remove();
        });
    }



    let dropdownHandler = () => {

        // Show the dropdown list when clicking on .s-field--dropdown
        $('.input-wrapper').on('click', '.s-field--dropdown', function (event) {
            event.stopPropagation();
            const dropdownList = $(event.currentTarget).find('.s-field--dropdown--list');
            dropdownList.show();
            dropdownList.css('opacity', '100%');
        });

        // Hide the dropdown list when clicking anywhere else on the screen
        $(document).on('click', function () {
            const dropdownLists = $('.s-field--dropdown--list');

            dropdownLists.css('opacity', '0%');
            dropdownLists.hide();
        });

        // Update the text value when clicking on an option
        $('.input-wrapper').on('click', '.s-field--dropdown--option', function (event) {
            event.stopPropagation();
            const selectedText = $(event.currentTarget).text();
            const dropdownPlaceholder = $(event.currentTarget).closest('.s-field--dropdown').find('.s-field--dropdown--placeholder');
            dropdownPlaceholder.text(selectedText);
            const realInput = $(event.currentTarget).closest('.s-field--dropdown').siblings('.s-dropdown--input--value')
            realInput.val(selectedText);

            const currentDropdownList = $(event.currentTarget).closest('.s-field--dropdown--list');
            currentDropdownList.css('opacity', '0%');
            currentDropdownList.hide();
        });

    }

    function manageDynamicRows() {
        // Function to create new rows based on a template
        // Initially hide the elements
        $('.s-field--row--wrapper--customer, .s-field--row--wrapper--supplier').hide();


        function createNewRows(templateClass, targetClass, count, container) {
            const existingRows = $(targetClass, container).length;
            let index = existingRows;

            // Remove extra rows if needed, but always leave at least one row
            if (existingRows > count && count > 0) {
                for (let i = count; i < existingRows; i++) {
                    $(`${targetClass}:last`, container).remove();
                }
            } else if (count <= 0 && existingRows > 1) {
                for (let i = 1; i < existingRows; i++) {
                    $(`${targetClass}:last`, container).remove();
                }
            }

            // Add new rows if needed
            for (let i = existingRows; i < count; i++) {
                const newRow = $(templateClass, container).eq(0).clone();

                newRow.find('[id], [name], [data-name]').each(function () {
                    const elem = $(this);
                    const newId = elem.attr('id').replace('--0', `--${index}`);
                    const newName = elem.attr('name').replace('--0', `--${index}`);
                    const newDataName = elem.attr('data-name').replace('--0', `--${index}`);

                    elem.attr({
                        'id': newId,
                        'name': newName,
                        'data-name': newDataName
                    });
                });

                newRow.insertAfter(`${targetClass}:last`, container);
                index++;
            }
        }

        // Listen for changes to #customersResponsible
        $('#customersResponsible').on('input', function (event) {
            const count = $(event.target).val();
            if (count > 0) {
                $('.s-field--row--wrapper--customer').show();
            } else {
                $('.s-field--row--wrapper--customer').hide();
            }
            createNewRows('.s-field--row--wrapper--customer', '.s-field--row--wrapper--customer', count, '.basic-wrapper.margin-bottom--40px');
        });

        // Listen for changes to #SupplierResponsible
        $('#SupplierResponsible').on('input', function (event) {
            const count = $(event.target).val();
            if (count > 0) {
                $('.s-field--row--wrapper--supplier').show();
            } else {
                $('.s-field--row--wrapper--supplier').hide();
            }
            createNewRows('.s-field--row--wrapper--supplier', '.s-field--row--wrapper--supplier', count, '.basic-wrapper.margin-bottom--40px');
        });
    }

    let specialInputsHandler_phone = () => {
        $('#phone').on('input', function () {
            var input = $(this);
            var start_position = input[0].selectionStart;

            // Only add a hashtag if there isn't one at the start already
            if (input.val().length && input.val()[0] !== '#') {
                input.val('#' + input.val());
                input[0].setSelectionRange(start_position, start_position);
            }
        });
    }


    function sanitizeText(text) {
        return text
            .replace(/&/g, 'and')  // Replace & with 'and'
            .replace(/[^a-zA-Z0-9-_ ]/g, '')  // Remove any character that isn't a letter, number, hyphen, underscore, or space
            .trim()  // Remove any leading or trailing whitespace
            .replace(/\s+/g, '-');  // Replace spaces with hyphens
    }


    const sliderHandler = () => {
        $('.s-slider--progress--button').each(function (index, button) {
            var $sliderBlock = $(button).closest('.s-slider--block');
            var sliderText = $(button).closest('.slider--wrapper').find('.s-input--slider--text').text().replace(/\s+/g, '-');
            var sliderTextSanitized = sanitizeText(sliderText);
            var $labelText = $(button).find('.s-slider--percentage--percentage--text')
            var $progressBar = $(button).siblings('.s-slider--progress')
            var $percentageInput = $(button).parent().siblings('.s-percentage--input');

            // Set initial position to 50% of the parent container's width
            var initialLeft = $sliderBlock.width() * 0;
            $(button).css('left', initialLeft);
            $progressBar.css('width', `${$(button).position().left}px`)

            // Set initial input value to 50%
            // $percentageInput.val(50);

            $(button).draggable({
                axis: 'x',
                containment: $sliderBlock,
                drag: function (event, ui) {
                    var totalWidth = $sliderBlock.width() - $(button).width();
                    var currentWidth = ui.position.left;
                    var percentage = Math.round((currentWidth / totalWidth) * 100);
                    if (percentage > 100) percentage = 100;
                    $labelText.text(percentage + '%')
                    //console.log($(button).position().left)
                    // Update the corresponding input value with the percentage
                    $percentageInput.val(percentage + '%');
                    $progressBar.css('width', `${$(button).position().left}px`)
                }
            });
        });


        $('.s-slider--progress--button').on('mousedown', (e) => {
            if (!($(e.target).hasClass('active'))) $(e.target).addClass('active')
            if (!($(e.target).find('.s-slider--percentage--percentage--text').hasClass('active'))) $(e.target).find('.s-slider--percentage--percentage--text').addClass('active')
            if (!($(e.target).siblings('.s-slider--progress').hasClass('active'))) $(e.target).siblings('.s-slider--progress').addClass('active')
        })

    }


    let firstRisk = $("#first-risk-block");
    function createSliderElement(riskName) {

        var sanitized = sanitizeText(riskName);
        const riskBlock = firstRisk.clone(); // Assume you have a template

        // Update risk name
        riskBlock.find(".risk-block--label").eq(0).text(riskName);

        // Update checkbox attributes
        riskBlock.find(".risk-checkbox input").attr({
            "id": `${sanitized}-Covered`,
            "name": `${sanitized}-Covered`,
            "data-name": `${sanitized}-Covered`
        });

        // Update frequency slider and input attributes
        riskBlock.find("[id$='-Frequency']").attr({
            "id": `${sanitized}-Frequency`,
            "name": `${sanitized}-Frequency`,
            "data-name": `${sanitized}-Frequency`
        });

        // Update gravity slider and input attributes
        riskBlock.find("[id$='-Gravity']").attr({
            "id": `${sanitized}-Severity`,
            "name": `${sanitized}-Severity`,
            "data-name": `${sanitized}-Severity`
        });

        riskBlock.attr({
            "id": `${sanitized}-risk-block`,
        });

        return riskBlock;

    }




    function createPolicyInputElement(name, index) {
        // Sanitize the name for use in attributes
        var sanitized = 'premium' + sanitizeText(name);
        var sanitized2 = 'deductible' + sanitizeText(name);

        var policyInputElement = $(
            '<div class="policies--input--row">' +
            '<div class="policy--label">' + name + '</div>' + // using the original name
            '<div class="policy--inputs-wrapper">' +
            '<input type="text" class="s-field--text dollar-input w-input" maxlength="256" name="' + sanitized + '" data-name="' + sanitized + '" placeholder="Annual Premium $" id="' + sanitized + '-' + index + '">' +  // <-- Modification here
            '<input type="text" class="s-field--text dollar-input w-input" maxlength="256" name="' + sanitized2 + '" data-name="' + sanitized2 + '" placeholder="Deductible Amount $" id="' + sanitized2 + '-' + index + '">' +
            '<div class="trash--card"><img src="https://assets-global.website-files.com/64cbd86665037e2f4e4e8779/64ebd9bda1410b0086e2a69a_clarity_trash-solid.svg" loading="lazy" alt="" class="trash--icon"></div>' +
            '</div>' +
            '</div>'
        );
        return policyInputElement;
    }



    function deleteUnusedRisks() {
        $('.s-risks--checkbox').each(function (index, element) {
            var checkbox = $(element).find('input[type="checkbox"]');
            var textElement = $(element).find('.s-risks--checkbox--text');

            if (checkbox.is(':checked')) {
            } else {
                $(element).remove();
            }
        });


        $('.s-policies--checkbox').each(function (index, element) {
            var checkbox = $(element).find('input[type="checkbox"]');
            var textElement = $(element).find('.s-risks--checkbox--text');

            if (checkbox.is(':checked')) {
            } else {
                $(element).remove();
            }
        });
    }

    function processDynamicRisks() {
        $("#first-risk-block").show();
        var checkedRisks = [];

        $('.s-risks--checkbox').each(function (index, element) {
            var checkbox = $(element).find('input[type="checkbox"]');
            var textElement = $(element).find('.s-risks--checkbox--text');

            if (checkbox.is(':checked')) {
                checkedRisks.push(textElement.text());
            } else {

            }
        });

        // Create and append the slider elements for each checked risk
        $.each(checkedRisks, function (index, riskName) {
            var newSlider = createSliderElement(riskName);

            $('.risks--block').parent().append(newSlider);
        });

        sliderHandler();

    }

    function processDynamicPolicies() {
        var checkedPolicies = [];

        $('.s-policies--checkbox').each(function (index, element) {
            var checkbox = $(element).find('input[type="checkbox"]');
            var textElement = $(element).find('.s-risks--checkbox--text');

            if (checkbox.is(':checked')) {
                checkedPolicies.push(textElement.text());
            } else {

            }
        });

        // Create and append an input for each policy
        $.each(checkedPolicies, function (index, policyName) {
            var newPolicyInput = createPolicyInputElement(policyName, index);
            $('.policies--input--row').last().after(newPolicyInput);
        });

        //sliderHandler();

        $('.policies--input--row').eq(0).hide()

        // trash button listerner

        $('.trash--icon').on('click', (e) => {
            let clickedButton = $(e.target)
            clickedButton.closest('.policies--input--row').remove()
        })

    }

    let lossIndex = 2;

    let lossHistoryHandler = () => {
        // Attach the event listener to a parent element and delegate it to '.plus--icon'
        $('.inputs--toggleable--wrapper').on('click', '.plus--icon', () => {
            // Create a new loss history element with a unique index
            let newLossHistoryElement = createLossHistoryElement(lossIndex);

            // Append the new element to the wrapper
            $('.plus--card').remove();
            newLossHistoryElement.appendTo('#loss-wrapper');

            $('.loss-history--row').each((index, element)=>{
                if(index < $('.loss-history--row').length - 1) $(element).find('.loss-trash--card').show()
            })

            // Increment the lossIndex for the next element
            lossIndex++;
        });
    }

    function createLossHistoryElement(index) {
        return $(
            `<div class="s-field--row--wrapper loss-history--row">
                <input type="text" class="s-field--text w-input" maxlength="256" name="Date-of-loss-${index}" data-name="Date of loss ${index}" placeholder="Date of loss" id="Date-of-loss-${index}">
                <input type="text" class="s-field--text dollar-input w-input" maxlength="256" name="Amount-of-loss-${index}" data-name="Amount of loss ${index}" placeholder="Amount of loss ($)" id="Amount-of-loss-${index}">
                <input type="text" class="s-field--text w-input" maxlength="256" name="Description-of-loss-${index}" data-name="Description of loss ${index}" placeholder="Description of loss" id="Description-of-loss-${index}">
                <div class="plus--card">
                    <img src="https://assets-global.website-files.com/64cbd86665037e2f4e4e8779/652fb73135003effe613bb9d_octicon_plus-16.svg" loading="lazy" alt="" class="plus--icon">
                </div>
                <div class="loss-trash--card">
                    <img src="https://assets-global.website-files.com/64cbd86665037e2f4e4e8779/64ebd9bda1410b0086e2a69a_clarity_trash-solid.svg" loading="lazy" alt="" class="loss-trash--icon">
                </div>
            </div>`
        );
    }

    $('.block--11').on('click', '.loss-trash--card', (e) => {
        let clickedButton = $(e.target);
        clickedButton.closest('.loss-history--row').remove()
    });






    lossHistoryHandler();
    manageDynamicRows();
    dropdownHandler();
    employeeListHandler();

    // special inputs handler
    specialInputsHandler_phone();
    $('.dollar-input').each(function () {
        formatDollarInput($(this));
    });

    $('.number-input').each(function () {
        formatNumberInput($(this));
    });

    $('.percentage--input').each(function () {
        formatPercentageInput($(this));
    });


    // Assuming the parent container has the ID 'inputContainer'
    $('.s-form').on('input', 'input[type="text"]', function (event) {
        // Check if the target input has a certain class or other identifying feature if needed
        if ($(event.target).hasClass('dollar-input')) {
            formatDollarInput($(event.target));
        }

        if ($(event.target).hasClass('number-input')) {
            formatNumberInput($(event.target));
        }

        if ($(event.target).hasClass('percentage--input')) {
            formatPercentageInput($(event.target));
        }
    });

    // RISKS HORIZON CONDITIONALS
    $('.s-button-small.yes').on('click', (e) => {
        $('#Recent-Risks-changes').removeClass('hidden')
        if (!($('.s-button-small.yes').hasClass('active'))) $('.s-button-small.yes').addClass('active')
        $('.s-button-small.no').removeClass('active')
        $('#Recent-Risks-changes').val('')
    });
    $('.s-button-small.no').on('click', (e) => {
        if (!($('#Recent-Risks-changes').hasClass('hidden'))) $('#Recent-Risks-changes').addClass('hidden')
        $('.s-button-small.yes').removeClass('active')
        if (!($('.s-button-small.no').hasClass('active'))) $('.s-button-small.no').addClass('active')
        $('#Recent-Risks-changes').val('No')
    });
    
    //button 2
    $('.s-button-small-2.no').on('click', (e) => {
        $('#Risks-Identified-by-Management-During-The-Process').removeClass('hidden')
        if (!($('.s-button-small-2.no').hasClass('active'))) $('.s-button-small-2.no').addClass('active')
        $('.s-button-small-2.yes').removeClass('active')
        $('#Risks-Identified-by-Management-During-The-Process').val('')
    });
    $('.s-button-small-2.yes').on('click', (e) => {
        if (!($('#Risks-Identified-by-Management-During-The-Process').hasClass('hidden'))) $('#Risks-Identified-by-Management-During-The-Process').addClass('hidden')
        $('.s-button-small-2.no').removeClass('active')
        if (!($('.s-button-small-2.yes').hasClass('active'))) $('.s-button-small-2.yes').addClass('active')
        $('#Risks-Identified-by-Management-During-The-Process').val('Yes')
    });
    

    $('.s-button--submit').on('click', (e) => {
        $('.next').trigger('click')
        // delete unused inputs if upload is selected:
        uploadInputsRemoval();
        deleteUnusedRisks();
        $('.s-field--row--wrapper.slider--wrapper').eq(0).remove()
        $('.policies--input--row').eq(0).remove()

    });




})




