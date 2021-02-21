<template>
  <div class="btn">{{btntxt}}</div>
</template>

<script>
export default {
    name: "ButtonBig",
    props: {
        btntxt: String
    }
}
</script>

<style lang="scss">
@mixin flex($al, $ju) {
    display: flex;
    align-items: $al;
    justify-content: $ju;
}

.btn {
    font-family: 'Red Hat Display', sans-serif;
    color: #fff;
    background: #000;
    border-radius: 5px;
    font-weight: 500;
    font-size: 0.85rem;
    width: 170px;
    height: 40px;
    cursor: pointer;
    @include flex(center, center);
    &:hover {
        box-shadow: 2px 2px 25px rgba(0, 0, 0, 0.3);
        transition: 0.15s ease-in-out
    }
}

</style>