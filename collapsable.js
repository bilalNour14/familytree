
    var chart_config = {
        chart: {
            container: "#collapsable-example",
            
            
            animateOnInit: true,
            
            node: { collapsable: true },
            animation: {
                nodeAnimation: "easeOutBounce",
                nodeSpeed: 500,
                connectorsAnimation: "bounce",
                connectorsSpeed: 700
            }
        },
        nodeStructure: {
            text: {name: "Nour Ali"},
            image: "img/Nourali.png",
            collapsed:true,
            children: [
                //first child of nour ali
                {
                    text: {name: "Sabreyyah Nour", },
                    image: "img/sabriyyah.jpg",
                    collapsed: true,
                    children: [
                        {
                            text: {name: "Qassim Nour"},
                            image: "img/figgs.png"
                        }
                    ]
                },
                //next child of nour ali
                {
                    text: {name: "Abdulaziz Nour"},
                    image: "img/abdulaziznour.jpg",
                    
                    children: [
                        {//zuhair's box
                            text: {name: "Zuhair Nour"},
                            image: "img/woodhouse.png",
                            children:[
                                {
                                    text:{name: "abdulaziz nour"},
                                    image: "img/azooz.png"
                                },
                            ]
                        },
                        {//lina's box
                            text: {name: "Lina Nour"},
                            image: "img/woodhouse.png"
                        },
                        {//jana's box
                            text: {name: "Jana Nour"},
                            image: "img/woodhouse.png"
                        },
                        {//ahmad's box
                            text: {name: "Ahmed Nour"},
                            image: "img/woodhouse.png"
                        },
                        {//mohammad's box
                            text: {name: "Mohammed Nour"},
                            image: "img/woodhouse.png"
                        }
                    ]
                },
                //next child of nour ali
                {//qassim's box
                    text: {name: "Qassim Nour"},
                    image: "img/lana.png",
                    collapsed: true,
                    children: [
                        {//randa's box
                            text: {name: "Randa Nour"},
                            image: "img/randa.png",
                            children:[
                                {//raed's box
                                    text: {name: "Raed Bokhari"},
                                    image: "img/RaedBokhari.png"
                                },
                                {//sarah's box
                                    text: {name: "Sarah Bokhari"},
                                    image: "img/SarahBokhari.png"
                                },
                                {//rowaida's box
                                    text: {name: "Rowaida Bokhari"},
                                    image: "img/Rowaida.png"
                                },
                                {//jana's box
                                    text: {name: "Jana Bokhari"},
                                    image: "img/JanaBokhari.png"
                                }
                            ]
                        },
                        {//ziyad's box
                            text: {name: "Ziyad Nour"},
                            image: "img/ziyad.png",
                            children:[
                                {//tareq's box
                                    text: {name: "Tareq Nour"},
                                    image: "img/Tareq.png"
                                },
                                {//lama's box
                                    text: {name: "Lama Nour"},
                                    image: "img/Lama.png"
                                },
                                {//badr's box
                                    text: {name: "Badr Nour"},
                                    image: "img/Badr.png"
                                },
                                {//qasim's box
                                    text: {name: "Qasim Nour"},
                                    image: "img/qasim.PNG"
                                }
                            ]
                        },
                        {//waleed's box
                            text: {name: "Waleed Nour", desc: "Born in 1971. Loves football and Messi."},
                            image: "img/waleed.png",
                            children:[
                                {//bilal's box
                                    text: {name: "Bilal Nour"},
                                    image: "img/bilal.png"
                                },
                                {//omar's box
                                    text: {name: "Omar Nour"},
                                    image: "img/omar.png"
                                },
                                {//yara's box
                                    text: {name: "Yara Nour"},
                                    image: "img/yara.png"
                                }
                            ]
                        }
                    ]
                },
                //next child of nour ali
                {
                    text: {name: "Khadijah Nour"},
                    image: "img/khadijah.jpg",
                    collapsed: true,
                    children: [
                        {
                            text: {name: "Fouad Nour"},
                            image: "img/woodhouse.png"
                        },
                        {
                            text: {name: "Nadiyah Nour"},
                            image: "img/woodhouse.png"
                        },
                        {
                            text: {name: "Amal Nour"},
                            image: "img/woodhouse.png"
                        }
                    ]
                },
                //next child of nour ali
                {
                    text: {name: "Aaishah Nour"},
                    image: "img/lanaaaa.png",
                    collapsed: true,
                },
                //next child of nour ali
                {
                    text: {name: "Abdulghaffar Nour"},
                    image: "img/Abdulghaffar.jpg",
                    collapsed: true,
                    children: [
                        {
                            text: {name: "Abdulqader Nour"},
                            image: "img/woodhouse.png"
                        },
                        {
                            text: {name: "Essam Nour"},
                            image: "img/woodhouse.png"
                        },
                        {
                            text: {name: "Emad Nour"},
                            image: "img/woodhouse.png"
                        },
                        {
                            text: {name: "Reem Nour"},
                            image: "img/woodhouse.png"
                        },
                        {
                            text: {name: "Dania Nour"},
                            image: "img/woodhouse.png"
                        }
                    ]
                },
                {
                    text: {name: "Bahriyah Nour"},
                    image: "img/lana.png",
                    collapsed: true,
                    children: [
                        {
                            text: {name: "Abdullatif Nour"},
                            image: "img/woodhouse.png"
                        },
                        {
                            text: {name: "Abdulshakoor Nour"},
                            image: "img/woodhouse.png"
                        },
                        {
                            text: {name: "Abdulhafiz Nour"},
                            image: "img/woodhouse.png"
                        },
                        {
                            text: {name: "Badriyah Nour"},
                            image: "img/woodhouse.png"
                        },
                        {
                            text: {name: "Othman Nour"},
                            image: "img/woodhouse.png"
                        },
                        {
                            text: {name: "Naeemah Nour"},
                            image: "img/woodhouse.png"
                        },
                        {
                            text: {name: "Ahmed Nour"},
                            image: "img/woodhouse.png"
                        },
                        {
                            text: {name: "Omar Nour"},
                            image: "img/woodhouse.png"
                        }
                    ]
                },
                //next child of nour ali
                {
                    text: {name: "Abbas Nour"},
                    image: "img/Abbas Nour.jpg",
                    collapsed: true,
                    children: [
                        {
                            text: {name: "Fawziyyah Nour"},
                            image: "img/woodhouse.png"
                        },
                        {
                            text: {name: "Latifah Nour"},
                            image: "img/woodhouse.png"
                        },
                        {
                            text: {name: "Fatihah Nour"},
                            image: "img/woodhouse.png"
                        },
                        {
                            text: {name: "Mohammad Nour"},
                            image: "img/woodhouse.png"
                        },
                        {
                            text: {name: "Kamal Nour"},
                            image: "img/woodhouse.png"
                        },
                        {
                            text: {name: "Adel Nour"},
                            image: "img/woodhouse.png"
                        },
                        {
                            text: {name: "Ahmad Nour"},
                            image: "img/woodhouse.png"
                        },
                        {
                            text: {name: "Bassam Nour"},
                            image: "img/woodhouse.png"
                        },
                        {
                            text: {name: "Shawqi Nour"},
                            image: "img/woodhouse.png"
                        }
                    ]
                },
                //next child of nour ali
                {
                    text: {name: "Abdallah Nour"},
                    image: "img/Abdullah.jpg",
                    collapsed: true,
                    children: [
                        {
                            text: {name: "Mohammad Nour"},
                            image: "img/woodhouse.png"
                        },
                        {
                            text: {name: "Ahmad Nour"},
                            image: "img/woodhouse.png"
                        }
                    ]
                },
                {
                    text: {name: "Shamsiyyah Nour"},
                    image: "img/Abdullah.jpg",
                    collapsed: true,
                    children: [
                        {
                            text: {name: "Houriyah Nour"},
                            image: "img/woodhouse.png"
                        },
                        {
                            text: {name: "Fatima Nour"},
                            image: "img/woodhouse.png"
                        },
                        {
                            text: {name: "Abdulhameed Nour"},
                            image: "img/woodhouse.png"
                        },
                        {
                            text: {name: "Zainy Nour"},
                            image: "img/woodhouse.png"
                        },
                        {
                            text: {name: "Badeeah Nour"},
                            image: "img/woodhouse.png"
                        },
                        {
                            text: {name: "Mohammad Ameen Nour"},
                            image: "img/woodhouse.png"
                        },
                        {
                            text: {name: "Khalid Nour"},
                            image: "img/woodhouse.png"
                        },
                        {
                            text: {name: "Ameerah Nour"},
                            image: "img/woodhouse.png"
                        },
                        {
                            text: {name: "Amal Nour"},
                            image: "img/woodhouse.png"
                        },
                        {
                            text: {name: "Ali Nour"},
                            image: "img/woodhouse.png"
                        }
                    ]
                }
            ]
        }
    };

/* Array approach
    var config = {
        container: "#collapsable-example",

        animateOnInit: true,
        
        node: {
            collapsable: true
        },
        animation: {
            nodeAnimation: "easeOutBounce",
            nodeSpeed: 700,
            connectorsAnimation: "bounce",
            connectorsSpeed: 700
        }
    },
    malory = {
        image: "img/malory.png"
    },

    lana = {
        parent: malory,
        image: "img/lana.png"
    }

    figgs = {
        parent: lana,
        image: "img/figgs.png"
    }

    sterling = {
        parent: malory,
        childrenDropLevel: 1,
        image: "img/sterling.png"
    },

    woodhouse = {
        parent: sterling,
        image: "img/woodhouse.png"
    },

    pseudo = {
        parent: malory,
        pseudo: true
    },

    cheryl = {
        parent: pseudo,
        image: "img/cheryl.png"
    },

    pam = {
        parent: pseudo,
        image: "img/pam.png"
    },

    chart_config = [config, malory, lana, figgs, sterling, woodhouse, pseudo, pam, cheryl];

*/