import gsap from "gsap";

export const myPage = {
    name: 'my-page',
    mode: 'out-in',
    apper: true,
    beforeEnter (el) {
        gsap.set(el, {
            scale: 0.9,
            opacity: 0
        })
    },
    enter(el, done) {
      gsap.to(el, {
        duration: 0.5,
        scale: 1,
        opacity: 1,
        onComplete: done
      });
    },
    beforeLeave (el) {
      gsap.set(el, {
        scale: 1,
        opacity: 1
      })
    },
    leave(el, done) {
      gsap.to(el, {
        duration: 0.5,
        scale: 0.9,
        opacity: 0,
        onComplete: done
      });
    }
}