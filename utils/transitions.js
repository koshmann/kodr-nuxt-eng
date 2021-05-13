import gsap from "gsap";

export const myPage = {
	name: 'my-page',
	mode: 'out-in',
	apper: true,
	beforeEnter (el) {
		gsap.set(el, {
			yPercent: 90,
			opacity: 0.75,
			scale: 0.95,
			borderRadius: '1rem',
		})
	},
	enter(el, done) {
		gsap.set(el, {
			transformOrigin: 'center center',
			borderRadius: '1rem'
		});
		gsap.to(el, {
			ease: "power4.out",
			duration: 0.75,
			yPercent: 0,
			opacity: 1,
			scale: 1,
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
		gsap.set(el, {
			transformOrigin: 'center center',
			borderRadius: '1rem'
		});
		gsap.to(el, {
			ease: "power4.out",
			duration: 0.75,
			scale: 0.95,
			opacity: 0.9,
			onComplete: done
		});
	}
}