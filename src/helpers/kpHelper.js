export const KpCountMap = (array) => {
  return array.filter((el) => el.city !== 'Итого')
}
export const KpFormMap = (data) => {
  const copy = {...data};
  delete copy.selected;
  delete copy.loaded;
  delete copy.data;
  delete copy.estimate;
  const com = data.estimate.find(el => el.city === "Итого");
  return {
    advObjectsId: data.selected,
    estimateList: data.estimate.filter((el) => el.city !== 'Итого'),
    ao_count_comm: com.ao_count,
    coverage_comm: com.coverage_people,
    cpt_comm: com.cpt,
    price_comm: com.final_price,
    traffic_comm: com.visits_traffic,
    ots_comm: com.ots_contacts,
    ...copy
  }

}

export const fileSaver = (data, name ) => {
  const a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  let blob = new Blob(data, {type: "octet/stream"}),
    url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = name;
  a.click();
  window.URL.revokeObjectURL(url);
}