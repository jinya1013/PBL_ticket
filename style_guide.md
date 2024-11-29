# Repository style guide

## Code

### Formatting

To keep code clean, understandable, and prevent as many annoying git issues as possible, we'll stick to a few formatting standards. The config options for these can typically be found in `pyproject.toml`, but will be summarized here:

- **Line length:** 100
- **Import sorting:** `isort` with `black` profile
- **Code formatting:** `black` with preview options enabled
- **Variable naming:** I typically default to snake case (e.g. `a_new_variable`), but it's not the end of the world if you work differently, as long as there is a consistent format being followed in each file.

### Code Annotation

Code should be kept well documented to a degree such that a reasonably well-informed person (i.e. think a new intern) should be able to read through the code base and from the code and comments be able to understand how the system works. As such there are some annotation forms we'll try and keep consistent:

- **File summary:** Begin each file with a 1-2 sentence description of it's purpose e.g. `"""Abstract base class template for modality-specific data parsers."""`
- **Type annotation:** Make sure to annotate the types of function inputs and outputs e.g.
  
  ```python
  def save(self, geometry: o3d.geometry.PointCloud, path: str) -> None:
  ```

- All functions should have a docstring to explain 1. their purpose, 2. What their inputs are for, and 3. What their outputs are. For this repo the format that will be followed is google without types. This looks like the following:

  ```python
  """_summary_

  Args:
      _arg1_: _description_
      _arg2_: _description_

  Returns:
      _description_
  """
  ```

  IDEs (e.g. `autoDocstring` in VSCode) usually have tools to help you generate this template for a given function definition. If you use any generative models to help write your docstring, it's on you to double check what they say is actually correct.

- **Comments:** Comments should typically aim to explain the *overarching purpose* of some piece of code that *may not be immediately obvious* to a reasonably well-informed person. Usually your code should (hopefully) be clear enough on it's own to not need comments explaining what it does, but if you are writing messy/hard to understand code for whatever reason, you should definitely be commenting it so that what it does is clear both to other people and yourself in the future. In general, it's better to have commented code too much than too little, so don't be too shy about commenting if you're worried some code may be hard to understand.

### File Structure

This should be pretty simple and self-explanatory from the existing file structure, but the general structure is that the project (`slmm`) is found in the `src` folder. The project itself is split into different folders for different subsections and sub-subsections etc. Each file should contain code for one discrete concept if possible. This is a bit loose of course i.e. there can be helper/util files with some useful generic functions, but the idea is to try and keep code as separated as possible so it's easier to change something down the line if we want to.

Note that these files in the project should all be for clean, self-contained, working parts of the project. If you are messing around with some test code that you want to save for later, store it in a `scripts` folder so that it can be understood by others to not really be a part of the overall project code.

## Git

File version control will be done with GitHub.

### Commits

Commits should be done pretty frequently. One commit should contain a single discrete change of some kind. The number of lines of code this change involves is variable, but all the changes together should define this one change and this one change only. For writing commit messages, follow the structure in [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/). This has the format of `<type>: <description>`, where the types are defined in the linked documentation.

An important thing to do is at the end of the day, if you have some code that isn't fully done and ready to be committed, push a `wip` type commit with all the changes you have at that point. This can help code being lost if you make a mistake and forget to otherwise save it somehow, and is extra important if you are coding on interactive cluster sessions which can time out and delete all your changes.

### Branches

Work for a specific feature should be done on it's own branch. Branch naming should follow the convention `<project subsection>/<project subsubsection>/.../<feature>`, where the project subsection hierarchy that the feature belongs to is separated by forward slashes, ending in the feature name itself. As the feature is developed, changes should be regularly committed to the branch, and the current head of the main branch should be often merged into the feature branch. Once the feature is done, the main branch should be merged in again to make sure the feature branch is compatible and able to be merged in, and a **pull request** should be made, with another person whose work is most related to new feature as a reviewer. The reviewer should then look through to make sure everything checks out and *create a merge commit* to merge the branch into the main branch.

## Project organization/note taking

### Issues

If there is a small issue that is found in the code itself, this should be noted down as a GitHub issue, with the person originally responsible for the code with the issue assigned to it. This issue can then be fixed on a bug fix branch and the patch can be merged in like any feature branch.

If there is a potential fix/change that you want to note down to do yourself later, while working on the branch you can note it down with a `# TODO` comment. However, once the branch has been merged in, you should make this a GitHub issue so it is easier to track all these TODOs after the branch has been merged.

### Note taking

While you are working, if you run into any weirdness at all, or make some decision that might have effects down the line, or are looking at/analyzing the results of some experiments that have been run, make sure to physically note down the issue, or your thoughts or whatever else might be relevant. The best place to do this would be in a notion page so that others will be able to look over your notes to see if there is anything relevant to them that you have noted down. This is also important so that we can look back in the future and see what happened, why we made certain decisions etc. and will ake it easier in the long run to finish the project and write up the results.

### Meetings

Some sparse notes for the most important points should be written down as a minimum and stored in the notion for people to reference in future. More comprehensive notes can be taken if we find it to be necessary.