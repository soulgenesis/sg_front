<script>
	import Nav from '$lib/components/Nav.svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		const tl = gsap.timeline();
		tl
            .from("#el1-1", {duration: 1, delay: 0.1, opacity: 0})
            .from("#el1-2", {duration: 1, delay: 0.1, opacity: 0})
            .from("#el1-3", {duration: 1, delay: 0.1, opacity: 0})
            .from("#el1-4", {duration: 1, delay: 0.1, opacity: 0})
            .from("#el1-5", {duration: 1, delay: 0.1, opacity: 0})
            .from("#el1-6", {duration: 1, delay: 0.1, opacity: 0})
            .from("#el1-7", {duration: 1, delay: 0.1, opacity: 0})
            .from("#el1-8", {duration: 1, delay: 0.1, opacity: 0})
            .from("#bg-2", {duration: 2, yPercent: 100, delay: 2, ease: "expo.out"})
            .from("#bg-3", {duration: 2, yPercent: 100, delay: 2, ease: "expo.out"})
            .from("#bg-4", {duration: 2, yPercent: 100, delay: 2, ease: "expo.out"})
            .from("#bg-5", {duration: 2, yPercent: 100, delay: 2, ease: "expo.out"})
	});
</script>

<Nav />
<div class="h-[82vh] relative overflow-hidden">
	<picture>
		<source
			id="bg-1"
			class="object-fill"
			media="(min-width: 1024px)"
			srcset="/img/bg/desktop-bg.webp"
		/>
		<source
			id="bg-1"
			class="object-fill"
			media="(min-width: 1024px)"
			srcset="/img/bg/desktop-bg.jpg"
		/>
		<source id="bg-1" class="object-fill" srcset="/img/bg/mobile-bg.webp" />
		<img id="bg-1" class="absolute w-full h-screen" src="/img/bg/mobile-bg.jpg" alt="" />
	</picture>
    <img id="el1-1" class="absolute top-32 right-0 md:rotate-180 md:left-0 md:top-10 md:w-20" src="/img/elements/el1-1.png" alt="">
    <img id="el1-2" class="absolute bottom-32 right-10 md:top-24 md:right-20 md:w-36" src="/img/elements/el1-2.png" alt="">
    <img id="el1-3" class="absolute bottom-20 md:-rotate-90 md:-bottom-14 md:left-56" src="/img/elements/el1-3.png" alt="">
    <img id="el1-4" class="hidden md:inline absolute top-20 left-[35%]" src="/img/elements/el1-4.png" alt="">
    <img id="el1-5" class="hidden md:inline absolute top-0 right-[20%]" src="/img/elements/el1-5.png" alt="">
    <img id="el1-6" class="hidden md:inline absolute bottom-0 right-10" src="/img/elements/el1-6.png" alt="">
    <img id="el1-7" class="hidden md:inline absolute bottom-0 right-[45%]" src="/img/elements/el1-7.png" alt="">
    <img id="el1-8" class="hidden md:inline absolute bottom-20 left-5" src="/img/elements/el1-8.png" alt="">
	<picture>
        <source id="bg-2" class="object-fill" media="(min-width: 1024px)" srcset="/img/bg/desktop-bg-2.webp">
        <source id="bg-2" class="object-fill" media="(min-width: 1024px)" srcset="/img/bg/desktop-bg-2.jpg">
        <source id="bg-2" class="object-fill" srcset="/img/bg/mobile-bg-2.webp">
        <img id="bg-2" class="absolute w-full h-screen" src="/img/bg/mobile-bg-2.jpg" alt="" />
    </picture>
    <picture>
        <source id="bg-3" class="object-fill" media="(min-width: 1024px)" srcset="/img/bg/desktop-bg-3.webp">
        <source id="bg-3" class="object-fill" media="(min-width: 1024px)" srcset="/img/bg/desktop-bg-3.jpg">
        <source id="bg-3" class="object-fill" srcset="/img/bg/mobile-bg-3.webp">
        <img id="bg-3" class="absolute w-full h-screen" src="/img/bg/mobile-bg-3.jpg" alt="" />
    </picture>
    <picture>
        <source id="bg-4" class="object-fill" media="(min-width: 1024px)" srcset="/img/bg/desktop-bg-4.webp">
        <source id="bg-4" class="object-fill" media="(min-width: 1024px)" srcset="/img/bg/desktop-bg-4.jpg">
        <source id="bg-4" class="object-fill" srcset="/img/bg/mobile-bg-4.webp">
        <img id="bg-4" class="absolute w-full h-screen" src="/img/bg/mobile-bg-4.jpg" alt="" />
    </picture>
    <picture>
        <source id="bg-5" class="object-fill" media="(min-width: 1024px)" srcset="/img/bg/desktop-bg-5.webp">
        <source id="bg-5" class="object-fill" media="(min-width: 1024px)" srcset="/img/bg/desktop-bg-5.jpg">
        <source id="bg-5" class="object-fill" srcset="/img/bg/mobile-bg-5.webp">
        <img id="bg-5" class="absolute w-full h-screen" src="/img/bg/mobile-bg-5.jpg" alt="" />
    </picture>
	<div class="text-white p-4">
		<p class="text-right -mb-3 mix-blend-difference lg:text-3xl lg:text-center lg:mt-2">
			Immersive NFT project
		</p>
		<div class="flex items-center space-x-3 justify-center lg:mt-32 lg:space-x-14">
			<img class="w-[12vw] mb-2 lg:mb-4 z-10 lg:w-[10vw]" src="/img/icons/orb.png" alt="" />
			<h1 class="font-vertigo text-[14.5vw] lg:text-[15vw] whitespace-nowrap mix-blend-difference">
				Soul genesis
			</h1>
		</div>
		<div class="lg:flex justify-end lg:mr-28">
			<p
				class="ml-6 mt-5 w-7/12 lg:w-auto text-sm whitespace-pre-line mix-blend-difference lg:m-0 lg:font-bold lg:text-base xl:-mt-10 xl:mr-8 2xl:mr-16"
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et placerat sapien.
				Pellentesque euismod malesuada neque, eget varius purus tristique.
                
                Pellentesque sed erat
				elementum, dignissim nisl eget, dignissim diam.
			</p>
		</div>
	</div>
</div>
