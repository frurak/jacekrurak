<template>
    <div class="hp_album_container">
        <div class="album_cover_container">
            <img src="@/assets/album.jpg" alt="Jacek Rurak - Przebudzenie">
        </div>
        <div class="album_descr_container">
            <div class="sounds_header">
                Autorski
                <div class="subfont_text"><p class="subfont">album</p></div>
            </div>
            <p class="article_one_text">
                Każdy z utworów ma inny charakter jednak wszystkie łączy jedna wspólna tonacja jak i emocje kompozytora, które od wielu lat stara się porządkować w swoim życiowym "przebudzeniu".
            </p>
            <div class="album_buttons_container">
                <ButtonBig style="color: #000; background: #fff;" btntxt="Szczegóły" />
                <ButtonBig btntxt="Kup teraz" class="purchase_btn" />
            </div>
        </div>
    </div>
</template>

<script>
import ButtonBig from "@/components/ButtonBig.vue";

export default {
    name: "HomePageAlbum",
    components: {
        ButtonBig
    }
}
</script>

<style lang="scss">
$border: #d1d1d1;
@mixin flex($al, $ju) {
  display: flex;
  align-items: $al;
  justify-content: $ju;
}

.hp_album_container {
    width: 100vw;
    height: 100vh;
    padding: 0 5vw 0 0;
    background: #060608;
    @include flex(center, space-between);
    .album_cover_container {
        height: 100%;
        width: 50vw;
        img {
            height: 100%;
        }
    }
    .album_descr_container {
        height: 100%;
        width: 46.5%;
        @include flex(flex-start, flex-start);
        flex-direction: column;
        padding: 10vh 0 0 0;
        .sounds_header {
            width: 100%;
            height: auto;
            @include flex(center, flex-start);
            font-family: 'Red Hat Display', sans-serif;
            font-weight: 800;
            font-size: 3.2rem;
            line-height: 4.4rem;
            margin-bottom: 2.6rem;
            color: #fff;
            .subfont_text {
                @include flex(center, center);
                margin-left: 15px;
                .subfont {
                    font-family: 'Shadows Into Light', cursive;
                    font-weight: 100;
                    font-size: 4rem;
                    position: relative;
                    color: #fff;
                    &::after {
                        content: '';
                        background: url("../assets/subtxt-path-wht.svg") no-repeat;
                        display: block;
                        height: 20px;
                        width: 130px;
                        background-position: center;
                        position: absolute;
                        left: 0;
                        bottom: -15%;
                    }
                }
            }
        }
        .article_one_text {
            font-size: 1.1rem;
            line-height: 1.5rem;
            margin-bottom: 2.6rem;
            letter-spacing: 0.5px;
            color: #fff;
        }
        .album_buttons_container {
            @include flex(center, flex-start);
            flex-direction: row;
            .purchase_btn {
                margin-left: 20px;
                background: #FF9148;
                color: #fff;
            }
        }
    }
}

</style>