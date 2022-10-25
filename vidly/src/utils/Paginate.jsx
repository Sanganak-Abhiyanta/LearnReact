import _ from "lodash";
//npm add lodash
// npm add prop-types

export default function Paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  // _(items) ... this will return lodash object
  return _(items).slice(startIndex).take(pageSize).value();
}
