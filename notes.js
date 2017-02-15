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
