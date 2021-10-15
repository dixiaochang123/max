export default function (obj) {
    var _obj = JSON.stringify(obj),
      objClone = JSON.parse(_obj);
    return objClone;
  }