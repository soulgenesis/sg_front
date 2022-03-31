<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

    let images = [
        "/img/elements/Stage 1/",
        "/img/elements/Stage 2/",
        "/img/elements/Stage 3/",
        // "/img/elements/Stage 4/",
        // "/img/elements/Stage 5/",
    ];

    let elements = [1, 2, 3, 4, 5, 6, 7, 8]

	onMount(() => {
		const tl = gsap.timeline();

		tl
            .to("#bg-1", {duration: 4, yPercent: -15, ease: "none"})

            .from("#el1-1", {duration: 0.5, opacity: 0}, "-=4")
            .from("#el1-2", {duration: 0.5, opacity: 0}, "-=3.5")
            .from("#el1-3", {duration: 0.5, opacity: 0}, "-=3")
            .from("#el1-4", {duration: 0.5, opacity: 0}, "-=2.5")
            .from("#el1-5", {duration: 0.5, opacity: 0}, "-=2")
            .from("#el1-6", {duration: 0.5, opacity: 0}, "-=1.5")
            .from("#el1-7", {duration: 0.5, opacity: 0}, "-=1")
            .from("#el1-8", {duration: 0.5, opacity: 0}, "-=0.5")

            .from("#bg-2", {duration: 2, yPercent: 100, ease: "expo.out"})

            .to("#bg-2", {duration: 4, yPercent: -15, ease: "none"})

            .from("#el2-1", {duration: 0.5, opacity: 0}, "-=4")
            .from("#el2-2", {duration: 0.5, opacity: 0}, "-=3.5")
            .from("#el2-3", {duration: 0.5, opacity: 0}, "-=3")
            .from("#el2-4", {duration: 0.5, opacity: 0}, "-=2.5")
            .from("#el2-5", {duration: 0.5, opacity: 0}, "-=2")
            .from("#el2-6", {duration: 0.5, opacity: 0}, "-=1.5")
            .from("#el2-7", {duration: 0.5, opacity: 0}, "-=1")
            .from("#el2-8", {duration: 0.5, opacity: 0}, "-=0.5")

            .from("#bg-3", {duration: 2, yPercent: 100, ease: "expo.out"})

            .to("#bg-3", {duration: 4, yPercent: -15, ease: "none"})

            .from("#el3-1", {duration: 0.5, opacity: 0}, "-=4")
            .from("#el3-2", {duration: 0.5, opacity: 0}, "-=3.5")
            .from("#el3-3", {duration: 0.5, opacity: 0}, "-=3")
            .from("#el3-4", {duration: 0.5, opacity: 0}, "-=2.5")
            .from("#el3-5", {duration: 0.5, opacity: 0}, "-=2")
            .from("#el3-6", {duration: 0.5, opacity: 0}, "-=1.5")
            .from("#el3-7", {duration: 0.5, opacity: 0}, "-=1")
            .from("#el3-8", {duration: 0.5, opacity: 0}, "-=0.5")
	});
</script>

<div class="h-[82vh] relative overflow-hidden">
    {#each images as i, index (index)}
        <picture>
            <source srcset="{i}Background.webp" />
            <img id="bg-{index + 1}" class="absolute object-cover w-full h-screen" src="{i}Background.jpg" alt="" />
        </picture>
        {#each elements as el}
            <picture>
                <source srcset="{i}el{el}.webp" />
                <img class="absolute" id="el{index + 1}-{el}" src="{i}el{el}.png" alt="element">
            </picture>
        {/each}
    {/each}

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
				Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Mauris et placerat sapien.
				Pellentesque euismod malesuada neque,
                eget varius purus tristique.
                
                Pellentesque sed erat
				elementum, dignissim nisl eget, dignissim diam.
			</p>
		</div>
	</div>
</div>

<style>
    @media (min-width: 1024px) {
        /* STAGE 1 */
        #el1-1 {
            top: 10%;
            left: 35%;
            width: 10%;
        }
        #el1-2 {
            top: 7%;
            right: 2%;
            width: 15%;
        }
        #el1-3 {
            bottom: 0;
            right: 2%;
            width: 10%;
        }
        #el1-4 {
            top: 5%;
            left: 0%;
            width: 7%;
        }
        #el1-5 {
            bottom: 0;
            left: 13%;
            width: 13%;
        }
        #el1-6 {
            bottom: 3%;
            left: 0;
            width: 13%;
        }
        #el1-7 {
            bottom: 0;
            right: 42%;
            width: 12%;
        }
        #el1-8 {
            top: 0;
            right: 20%;
            width: 10%;
        }

        /* STAGE 2 */
        #el2-1 {
            top: 9%;
            right: 6%;
            width: 15%;
        }
        #el2-2 {
            bottom: 0;
            left: 10%;
            width: 17%;
        }
        #el2-3 {
            bottom: 0;
            right: 0;
            width: 10%;
        }
        #el2-4 {
            top: 0;
            left: 0;
            width: 18%;
        }
        #el2-5 {
            top: 5%;
            left: 35%;
            width: 12%;
        }
        #el2-6 {
            bottom: 0;
            left: 0;
            width: 17%;
        }
        #el2-7 {
            top: 0;
            right: 20%;
            width: 18%;
        }
        #el2-8 {
            bottom: 0;
            left: 45%;
            width: 15%;
        }

        /* STAGE 3 */
        #el3-1 {
            bottom: 0;
            left: 20%;
            width: 20%;
        }
        #el3-2 {
            top: 5%;
            right: 2%;
            width: 17%;
        }
        #el3-3 {
            bottom: 0;
            right: 0;
            width: 10%;
        }
        #el3-4 {
            top: 0;
            left: 0;
            width: 25%;
        }
        #el3-5 {
            bottom: 0;
            left: 0;
            width: 22%;
        }
        #el3-6 {
            top: 0;
            right: 13%;
            width: 25%;
        }
        #el3-7 {
            bottom: 0;
            right: 35%;
            width: 18%;
        }
        #el3-8 {
            top: 2%;
            left: 35%;
            width: 17%;
        }
    }
</style>