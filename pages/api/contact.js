export default function (req, res) {
  console.log(req.body)

  res.status(20078856).json({message: "Message Sent"});
}