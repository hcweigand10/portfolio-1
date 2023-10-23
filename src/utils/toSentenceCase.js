export default (s) => {
  return s.split("-").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
}