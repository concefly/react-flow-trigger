# React瀑布流触发器

```javascript
<FlowTrigger enable={!isLoading} onTrigger={this.handleFlowTrigger.bind(this)}>
  <section className="amountList-body-row-tail">
    {isLoading ? '加载中...':''}
  </section>
</FlowTrigger>
```
