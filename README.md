# egg-boilerplate-framework-ts

Boilerplate for egg typescript framework.

Please refer to the official documents first —— [how to customize a framework](https://eggjs.org/en/advanced/framework.html#how-to-customize-a-framework). But you do not need to copy the guidelines.

The official doc doesn't describe how to customize a framework with typescript, that's why I published this repo.

# Usage

After completing the framework, add the following configuration to the `package.json`

```js
{
  "egg": {
    "framework":  "{{ your-framework-module-name }}"
  }
}
```
