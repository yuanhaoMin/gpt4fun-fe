<template>
    <div class="home-left-container">
        <img alt="image" src="https://play.teleporthq.io/static/svg/default-img.svg" class="company-logo" />
        <span>
            <span>xxx公司名字</span>
            <br />
            <br />
        </span>
        <img alt="image" src="https://play.teleporthq.io/static/svg/default-img.svg" class="company-slogan-image" />
        <span>
            <span>Slogan</span>
            <br />
        </span>
        <div class="company-info-container">
            <div class="email-container">
                <img alt="image" src="https://play.teleporthq.io/static/svg/default-img.svg" class="email-icon" />
                <span class="email-text">邮箱</span>
            </div>
            <div class="phone-container">
                <img alt="image" src="https://play.teleporthq.io/static/svg/default-img.svg" class="phone-icon" />
                <span class="phone-text">电话</span>
            </div>
            <div class="address-container">
                <img alt="image" src="https://play.teleporthq.io/static/svg/default-img.svg" class="address-icon" />
                <span class="address-text">地址</span>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "HomeLeft"
}
</script>
  
<style scoped>
.home-left-container {
    flex: 0 0 auto;
    color: #000000;
    width: 400px;
    height: 90vh;
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
}

.company-logo {
    width: 100px;
    object-fit: cover;
}

.company-slogan-image {
    width: 100px;
    margin-top: 200px;
}

.company-info-container {
    width: 100%;
    height: 30%;
    display: flex;
    margin-top: var(--dl-space-space-threeunits);
    align-items: center;
    flex-direction: column;
}

.email-container {
    width: 80%;
    display: flex;
    margin-top: var(--dl-space-space-unit);
    align-items: flex-start;
}

.email-icon {
    width: var(--dl-size-size-small);
    align-self: flex-end;
    margin-top: var(--dl-space-space-halfunit);
    margin-left: var(--dl-space-space-halfunit);
    margin-right: var(--dl-space-space-halfunit);
    margin-bottom: var(--dl-space-space-halfunit);
}

.email-text {
    margin-top: var(--dl-space-space-oneandhalfunits);
}

.phone-container {
    width: 80%;
    display: flex;
    align-items: flex-start;
}

.phone-icon {
    width: var(--dl-size-size-small);
    align-self: flex-end;
    margin-top: var(--dl-space-space-halfunit);
    margin-left: var(--dl-space-space-halfunit);
    margin-right: var(--dl-space-space-halfunit);
    margin-bottom: var(--dl-space-space-halfunit);
}

.phone-text {
    margin-top: var(--dl-space-space-oneandhalfunits);
}

.address-container {
    width: 80%;
    display: flex;
    align-items: flex-start;
}

.address-icon {
    width: var(--dl-size-size-small);
    align-self: flex-end;
    margin-top: var(--dl-space-space-halfunit);
    margin-left: var(--dl-space-space-halfunit);
    margin-right: var(--dl-space-space-halfunit);
    margin-bottom: var(--dl-space-space-halfunit);
}

.address-text {
    margin-top: var(--dl-space-space-oneandhalfunits);
}
</style>