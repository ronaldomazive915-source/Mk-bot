let handler = async (m, { reply }) => {
  const repoInfo = `
*🤖 RONY-bot Repository*

📁 *Repository:* ronaldomazive915-source
🔗 *GitHub Link:* https://github.com/ronaldomazive915-source

⭐ Feel free to star the repo if you like it!
📝 Report issues and contribute to the project.

*Thank you for using RONY-bot!* 🚀
  `.trim();

  try {
    await reply(repoInfo);
  } catch (err) {
    console.log(err);
    reply("❌ Failed to display repository information.");
  }
};

handler.command = ["repo", "source", "code", "github"];
handler.tags = ["main"];
handler.help = ["repo"];
handler.group = true;

module.exports = handler;
