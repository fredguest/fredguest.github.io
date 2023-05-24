<script>
  export let name;
  export let desc;
  export let email;

  import Logo from './logo.svelte';
</script>

<div class="container">
  <div class="hero">
    <div class="logo">
      <Logo />
    </div>
    <div class="title">
      {name}
    </div>
  </div>
  <div class="body">
    <div class="content">
      {desc}
    </div>
    <div class="content">
      {email}
    </div>
  </div>
</div>

<style>
  .container {
    position: absolute;
    transform: translate(-50%);
    -ms-transform: translate(-50%);
    left: 50%;
    top: 30%;
  }

  .hero {
    display: flex;
    align-items: end;
    justify-content: center;
  }

  .logo {
    margin-right: 10px;
    height: 70px;
    width: 70px;
  }

  .title {
    font-size: 80px;
    font-weight: 100;
    background-size: 100%;
    background-clip: text;
    -moz-background-clip: text;
    -webkit-background-clip: text;
    text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(45deg, #ddd, #eee);
    background-color: #7982e5;
  }

  .body {
    margin-top: 40px;
  }

  .content {
    color: #777;
    font-size: 24px;
    font-weight: 200;
    text-align: center;
    padding-bottom: 6px;
  }

  @media (max-width: 640px) {
    .logo {
      margin-right: 6px;
      height: 52px;
      width: 52px;
    }

    .title {
      font-size: 60px;
    }

    .body {
      margin-top: 20px;
    }

    .content {
      font-size: 16px;
      padding-bottom: 2px;
    }
  }
</style>
