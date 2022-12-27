import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);


const generateAction = async (req, res) => {
  	// Run first prompt
	const basePrompt = `Create a list of top 10 Hotels to visit in ${req.body.inputH1}  with their address which are ${req.body.inputH2}. Do not provide pincode in the address.`
	console.log(basePrompt);
	const baseCompletion = await openai.createCompletion({
		model: 'text-davinci-003',
		prompt: `${basePrompt}`,
		temperature: 0.6,
		max_tokens: 1500,
	});
  
  
  	const basePromptOutput = baseCompletion.data.choices.pop();

  	res.status(200).json({ output: basePromptOutput });
};

export default generateAction;
