<script>
export default {
    name: "footer-content"
}
</script>

<template>
    <div class="grid bg-primary mt-4 p-4 align-content-start">
        <div class="col-12 ml-3 align-items-center justify-content-center">
            <p>Copyright &copy; 2024. ACME Studios</p>
        </div>
        <div class="col-12 ml-3 mt-3 align-items-center justify-content-center">
            <p>
                {{ $t('authoring-phrase.intro') }} <i class="pi pi-heart text-red-50"/>
                {{ $t('authoring-phrase.use') }} <a class="text-white" href="https://primevue.org/" target="_blank">PrimeVue</a>
                {{ $t('authoring-phrase.author', {brand: 'ACME'}) }}
            </p>
        </div>
    </div>
</template>