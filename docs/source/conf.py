# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = "SOILE"
copyright = "2023, Thomas Pfau, Daniel Warna"
author = "Thomas Pfau, Daniel Warna"
release = "0.1"

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = ["myst_parser", "sphinx.ext.autosectionlabel"]

templates_path = ["_templates"]
exclude_patterns = []


# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_style = "css/my_theme.css"
def setup(app):
	app.add_css_file('soile_custom.css')
html_theme = "sphinx_rtd_theme"
html_static_path = ["_static"]
