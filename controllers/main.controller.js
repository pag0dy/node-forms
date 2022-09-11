let users = [];

const home = (req, res) => {
    res.render('home', { users: users });
}

const register = (req, res) => {
    const { body, files } = req;
    const { avatar } = files;
    avatar.mv('./public/img/' + avatar.name);
    body['image'] = avatar.name
    users.push(body);
    res.redirect('/');
}

module.exports = {
    home,
    register
}