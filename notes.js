

Andrew Nease: Speech Language Pathologist/English Major
Kyle Tulod: Religious Studies, focus on East Asia, minor in Japanese studies, some physics coursework.
Jenny Kats: Recent Psychology/Business: Marketing graduate. Business Development Manager.

Problem we were trying to solve: As an alternative to the viral and unreliable content that often floods most social networks, we created a social network that allows users to curate a relevant and interesting news feed based on trusted connections and personal interests.

The user creates an account that allows them to manage their connections and add relevant interests. They interact with a modern single page UI implemented in React/Redux. Their feed then becomes populated from a data store maintained on the front-end containing articles that have been liked by their connections or are relevant to their interests. This data is fetched by API calls to a public-facing API written with Ruby on Rails that executes user authentication and database management.





// in actions index
const BASE_URL = 'http://localhost.com:3000'

can set axios with a BASE_URL
axios.defaults.BASE_URL = 'http://localhost.com:3000'
axios.patch('/sessions')

could pass jwt as variable
but axios also has a defaults for headers

// make sure that every request has a HTTP_AUTHORIZATION
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

// in console request.headers['HTTP_AUTHORIZATION']

on server side in notes controller:

def index
 token = request.headers['HTTP_AUTHORIZATION']
 if token
   user_info = Auth.decode{token}
   current_user = User.find_by(id: user_info['user_id'])
 end

 now can get notes of current user_id
 @notes = current_user.notes

// make a method in Application controller

def current_user
 token = request.headers['HTTP_AUTHORIZATION']
 if token
   user_info = Auth.decode{token}
   @current_user ||= User.find_by(id: user_info['user_id'])
 end

then use that method in other controllers



make a new folder called adaptors in react
index.js

noteAdaptors.js

export default notesAdaptor = {
 fetchNotes: ,
 loginUser: ,
 updateNote:


}


in actions/index.js
import notesAdaptor from 'adaptors/notesAdaptor'

in addNote actions

 const note = notesAdaptor.createNote(params)


 and put the axios request into the adaptor

he uses _.debounce to make sure requests dont repeat too quickly

updateNote: function(noteParams) {
 return _.debounce (() => {
   axios.patch(...), noteParams.note ).then(response => response.data )


 }, 500())



}
