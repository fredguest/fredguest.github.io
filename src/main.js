import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    name: 'pixellize',
    desc: 'software development',
    email: 'info@pixellize.com'
  }
});

export default app;
