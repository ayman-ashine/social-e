export default function handler(req, res) {

  res.status(200).json({ message: 'handler' })
  console.log(req.query)
  console.log(req.method)

}
