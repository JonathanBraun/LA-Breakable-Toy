class ReviewsController < ApplicationController
  before_action :set_review, only: [:edit, :show, :update, :destroy]
  # before_action :set_playlist, except: [:show]
  before_action :authenticate_user!, only: [:new, :create, :edit, :update]

  def index
    @playlists = Playlist.all
    @review
  end

  def new
    @review = Review.new
  end

  def show
    # up = @review.upvotes
    # down = @review.downvotes
    # data = {upvotes: up, downvotes: down}
    # render json: data
  end

  def create
    @review = Review.new(review_params)
    @review.playlist = @playlist
    @review.user_id = current_user.id
    # if @review.save
    #   ReviewMailer.new_review(@review).deliver_now
    #   flash[:notice] = ("Rating added successfully.")
    #   redirect_to @playlist
    # else
    #   flash[:notice] = @review.errors.full_messages.to_sentence
    #   render :new
    # end
  end

  def edit
    # @review = Review.find(params[:id])
    # if @review.user_id != current_user.id && !current_user.admin?
    #   redirect_to playlist_path(@review.playlist_id), notice: "You are not the author of this review"
    # end
  end

  # def update
  #   if @review.update(review_params)
  #     redirect_to @playlist, notice: "Rating was successfully updated."
  #   else
  #     render :edit
  #   end
  # end
  #
  # def destroy
  #   @review.destroy
  #   redirect_to @playlist, notice: 'Review was successfully destroyed.'
  # end

  private

  def set_review
    @review = Review.find(params[:id])
  end

  def set_playlist
    @playlist = Playlist.find(params[:playlist_id])
  end

  def review_params
    params.require(:review).permit(
      :rating,
      :body
    )
  end

end
