require 'spec_helper'

feature 'user signs in' do
  let(:user) do
    User.create(
      username: "user",
      email: "user@example.com",
      password: "password"
    )
  end


  scenario 'user signs up and logs in with required information and creates a review of a playlist' do
    playlist = Playlist.create(
      url: "https://embed.spotify.com/?uri=spotify:user:jonathanbraun:playlist:6XIs7oxG4KjWixZsI2F3t8",
      time: DateTime.parse("09:00:00"),
      name: "Taking Care of Business"
    )

    visit root_path
    click_link 'Sign up'
    fill_in 'Username', with: 'user'
    fill_in 'Email', with: 'user@example.com'
    fill_in 'Password', with: 'password'
    fill_in 'Password confirmation', with: 'password'
    click_button 'Sign up'

    expect(page).to have_content("signed up successfully")
    expect(page).to have_content("Logout")
    click_link 'Logout'
    click_link 'Login'
    fill_in 'Email', with: 'user@example.com'
    fill_in 'Password', with: 'password'
    click_button 'Log in'

    expect(page).to have_content("Signed in successfully")

    click_link 'Review a Playlist'

    expect(page).to have_content("Playlists by Name")
    expect(page).to have_content playlist.name

    click_link playlist.name

    expect(page).to have_content("Feedback on")

    fill_in "This playlist's rating:", with: 5
    fill_in "Additional feedback on this playlist?", with: "That was dope!"

    click_button "Submit"

    expect(page).to have_content("Rating added successfully")
    expect(page).to have_content("User: user")
    expect(page).to have_content("That was dope!")
    expect(page).to have_content("Rating: 5")


  end
end
