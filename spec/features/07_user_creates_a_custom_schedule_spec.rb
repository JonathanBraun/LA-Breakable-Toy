require 'spec_helper'

feature 'user signs in' do

  scenario 'user visits custom schedule tab' do
    user = User.create(
        username: "user",
        email: "user@example.com",
        password: "password"
    )

    visit root_path
    click_link 'Login'
    fill_in 'Email', with: 'user@example.com'
    fill_in 'Password', with: 'password'
    click_button 'Log in'

    expect(page).to have_content("Signed in successfully")

    click_link 'Custom Schedule'

    expect(page).to have_content("Custom Schedule for #{user.username}")
    expect(page).to have_content user.username



  end
end
