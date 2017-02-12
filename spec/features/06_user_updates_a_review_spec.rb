require 'spec_helper'

feature 'user signs in' do

  scenario 'user logs in with required information and creates a review of a playlist' do
    user = User.create(
        username: "user",
        email: "user@example.com",
        password: "password"
    )

    playlist = Playlist.create(
      url: "https://embed.spotify.com/?uri=spotify:user:jonathanbraun:playlist:6XIs7oxG4KjWixZsI2F3t8",
      time: DateTime.parse("09:00:00"),
      name: "Taking Care of Business"
    )

    review = Review.create(
    rating: 5,
    body: "That was dope!",
    user_id: user.id,
    playlist_id: playlist.id
    )

    visit root_path
    click_link 'Login'
    fill_in 'Email', with: 'user@example.com'
    fill_in 'Password', with: 'password'
    click_button 'Log in'

    expect(page).to have_content("Signed in successfully")

    click_link 'Review a Playlist'

    expect(page).to have_content("Playlists by Name")
    expect(page).to have_content playlist.name

    click_link playlist.name
    expect(page).to have_content("User: user")
    expect(page).to have_content(review.body)
    expect(page).to have_content("Rating: 5")
    click_link 'Edit your review'

    expect(page).to have_content("This playlist's rating:")
    expect(page).to have_content("Additional feedback on this playlist?")

    fill_in "This playlist's rating:", with: 4
    fill_in "Additional feedback on this playlist?", with: "That was slightly less dope than I previously thought"

    click_button "Submit"

    expect(page).to have_content("Rating was successfully updated")
    expect(page).to have_content("User: user")
    expect(page).to have_content("That was slightly less dope than I previously thought")
    expect(page).to have_content("Rating: 4")


  end
end
