const params = {
    particles: {
        number: {
        value: 120,
        },
        color: {
        value: "#379683"
        },
        shape: {
        type: "character",
        stroke: {
            width: 0,
            color: "#000000"
        },
        polygon: {
            nb_sides: 5
        }
        },
        opacity: {
        value: 1,
        random: false,
        anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
        }
        },
        size: {
        value: 5,
        random: true,
        anim: {
            enable: false,
            speed: 20,
            size_min: 0.1,
            sync: false
        }
        },
        line_linked: {
        enable: true,
        distance: 150,
        color: "#FFF",
        opacity: 0.4,
        width: 1
        },
        move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
        }
        }
    },
    retina_detect: true}

export default params;