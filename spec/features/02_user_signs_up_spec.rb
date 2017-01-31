require 'spec_helper'

feature 'user creates an account' do

  scenario 'specifying valid and required information' do
    visit root_path
    click_link 'Sign up'
    fill_in 'Username', with: 'user'
    fill_in 'Email', with: 'user@example.com'
    fill_in 'Password', with: 'password'
    fill_in 'Password confirmation', with: 'password'
    click_button 'Sign up'

    expect(page).to have_content("signed up successfully")
    expect(page).to have_content("Logout")
  end

  scenario 'email is invalid' do
    visit root_path
    click_link 'Sign up'
    fill_in 'Username', with: 'user'
    fill_in 'Email', with: 'user'
    fill_in 'Password', with: 'password'
    fill_in 'Password confirmation', with: 'password'
    click_button 'Sign up'

    expect(page).to have_content("Email is invalid")
    expect(page).to have_content("Log in")
  end

  scenario 'required email is not supplied' do
    visit root_path
    click_link 'Sign up'
    fill_in 'Username', with: 'user'
    fill_in 'Email', with: ''
    fill_in 'Password', with: 'password'
    fill_in 'Password confirmation', with: 'password'
    click_button 'Sign up'

    expect(page).to have_content("Email can't be blank")
    expect(page).to have_content("Log in")
  end

  scenario 'required password is not supplied' do
    visit root_path
    click_link 'Sign up'
    fill_in 'Username', with: 'user'
    fill_in 'Email', with: 'user@example.com'
    fill_in 'Password', with: ''
    fill_in 'Password confirmation', with: ''
    click_button 'Sign up'

    expect(page).to have_content("Password can't be blank")
    expect(page).to have_content("Log in")
  end

  scenario 'password confirmation does not match confirmation' do
    visit root_path
    click_link 'Sign up'
    fill_in 'Username', with: 'user'
    fill_in 'Email', with: 'user@example.com'
    fill_in 'Password', with: 'password'
    fill_in 'Password confirmation', with: 'paswor'
    click_button 'Sign up'

    expect(page).to have_content("Password confirmation doesn't match")
    expect(page).to have_content("Log in")
  end
end
