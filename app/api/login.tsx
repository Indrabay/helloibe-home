async function handler (req: any, res: any) {
  const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      "Accept": "*/*"
    }
    const userLoginData = {
      username: req.body.email,
      password: req.body.password
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(userLoginData),
      headers
    }

    console.log("im here")

    await fetch('http://localhost:9999/users/login', options).then(response => {
      console.log('haha',response)
    })
}

export default handler