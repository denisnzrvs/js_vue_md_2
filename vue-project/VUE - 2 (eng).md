LINK TO FIGMA - https://www.figma.com/file/x6oiMuAYHr2jphGOYNYrU9/Untitled?type=design&node-id=0%3A1&mode=design&t=VavAnJ5NZgNHMmP1-1

IMPORTANT ABOUT SUBMISSIONS: You need to put your homework on a github page. The link to your github project must be placed in moodle MD - VUE #2. I am waiting for the works until tomorrow (26.10) 23:59

[X] 1. Register all components (new & existing) globally, not locally:
    * LandingComponent
    * HeaderComponent
    * NavComponent
    * HomeComponent
    * SongListComponent
    * SongFilterComponent
    * AboutMeComponent
    * FormComponent
    * Other components, if necessary

[~] 3. Create file which will export json data which you can find in the file `songs-list.json`

[X] 2. Create global store file where you will define all the global variables and methods:
    [X] 2.1. `all_songs` with json value from the file which you created in task 3. (first you will need to import file object from task 3.) 
    [X] 2.2. `user` object with properties for: 
        * first name with default value `name`
        * last name with default value `surname`
        * student code with default value `CODE1234`
        * logged at timestamp array with default value - empty array
        * logged in status with default value `false`
    [X] 2.3. create a function which, when called, will change logged in status to `true` & push new logged at timestamp with format - DD/MM/YYYY - HH:MM
    [X] 2.4. create a function which, when called, will reset all properties values to default on the `user` object


[X] 3. Setup router file & logic based on these rules:
    [X] 3.1. /          - LandingComponent
    [X] 3.2. /home      - HomeComponent (can navigate only if global `user` logged in status is `true`)
    [X] 3.3. /about-me  - AboutMe (can navigate only if global `user` logged in status is `true`)

[X] 4. App (check Figma for design reference)
    [X] 4.1. Add HeaderComponent
    [X] 4.2. Add NavComponent:
        * Visible only when `user` logged in status is `true`
	[X] 4.3. Setup router element

[X] 5. HeaderComponent (check Figma for design reference)
    [X] 5.1. Avatar: it must be a circle with a background color of your choice;
        * Visible or destroyed based on global `user` logged in status;
	[X] 5.2. A new computed value `full_name` must be created by combining first name & last name from global `user` object;
	    * You must display this `full_name` variable in the HTML where your first and last name are expected.
        * Visible or destroyed based on global `user` logged in status;
	[X] 5.3. Button with text "LOGIN" or "LOGOUT" depending on the global `user` logged in status
    [~] 5.4. By pressing the "LOGIN" button:
			* the system `alert` notification window appears with the question: "Do you want to log in?" with options, "Yes" & "Cancel".
				- Pressing `Yes` executes following actions:
                    * call global method to login user (task 2.2.)
				- By pressing `Cancel` everything remains as it was
			* By pressing the "LOGOUT" button:
				- the system `alert` notification window appears with the question: "Do you want to log out?" with options, "Yes" & "Cancel".
					* Pressing `Yes` executes the following actions
						- call global method to log out user (task 2.3.)

[~] 6. NavComponent (check Figma for design reference)
    [X] 6.1. Router links for routes:
        * /home
        * /about-me
    [~] 6.2. Style active class to make active route link stand out

7. [X] HomeComponent (check Figma for design reference)
    [X] 7.1. Display elements:
        * title
        * SongListComponent

8. [~] SongFilterComponent (check Figma for design reference)
    [X] 8.1. Add three functional buttons:
        [X] * None - will display `SongListComponent` song list in default order
        [X] * Name - will order `SongListComponent` song list in acceding order based on `name` property
        [X] * Artist - will order `SongListComponent` song list in ascending order based on `artist` property
    [ ] 8.2. Visually indicate active filter button

9. [X]SongListComponent (check Figma for design reference)
    [X] 9.1. Display `SongFilterComponent` component
    [X] 9.2. Create table with two header columns:
        [] * Name
        [X] * Artist
    [X] 9.3. Display all songs from the global variable `all_songs`
    [X] 9.4. You need to sort `all_songs` based on selected filter button in `SongFilterComponent`

10. AboutMeComponent (check Figma for design reference)
    10.1. Add button with following functionality:
        * button has two states:
            - not active:
                * label `EDIT FORM`
                * by clicking on this button:
                    - change status to - active
                    - enables `FormComponent` all input fields (set input fields attribute `disabled: false`)
            - active:
                * label `CANCEL`
                * apply different styling to separate from not active state
                * by clicking on this button:
                    - change status to - not active
                    - disables `FormComponent` all input fields (set input fields attribute `disabled: true`)
                
11. FormComponent (check Figma for design reference)
    11.1. Create a form with three <label> and <input> elements:
        * <label> - First name
        * <input> - show global `user` first name property value

        * <label> - Last name
        * <input> - show global `user` last name property value

        * <label> - Student code
        * <input> - show global `user` student code property value
    11.2. Create another row with:
        * <label> - Logged in at
        * display all global `user` logged in at timestamps in descending order as regular text (check the format)
    11.3. Add attribute `disabled` to all <input> elements
        * attribute `disabled` value is determined based on the state of `AboutMeComponent` edit form button
            - if `AboutMeComponent` edit form button is active then <input> fields are enabled (`disabled: false`)
            - if `AboutMeComponent` edit form button is not active then <input> fields are disabled (`disabled: true`)
    11.4. Add different styling to every <input> element based on attribute's `disabled` state    
    11.5. All input fields should change global `user` property values
        * whenever you change first name and/or last name input fields value you should see instant text change in `HeaderComponent` user's full name

        