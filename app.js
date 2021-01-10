document.addEventListener("DOMContentLoaded", function () {
  var inputs = Object.values(document.querySelectorAll("textarea")).reduce(
    function (total, next) {
      total[next.name] = next;
      return total;
    },
    {}
  );

  function renderToTarget(name, value) {
    var renderTargets = document.querySelectorAll(
      '[data-render="' + name + '"]'
    );

    Object.values(renderTargets).forEach(function (t) {
      t.innerText = value;
    });
  }

  console.log(inputs);

  Object.values(inputs).forEach(function (txt) {
    txt.value = window.localStorage.getItem(txt.name) || "";
    renderToTarget(txt.name, txt.value);
    txt.addEventListener("change", function () {
      window.localStorage.setItem(txt.name, txt.value);
      renderToTarget(txt.name, txt.value);
    });
  });
});
