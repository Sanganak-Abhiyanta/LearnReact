import _ from "lodash";

export default function Paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  // _(items) ... this will return lodash object
  return _(items).slice(startIndex).take(pageSize).value();
}
