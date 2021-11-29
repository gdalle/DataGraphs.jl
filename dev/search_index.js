var documenterSearchIndex = {"docs":
[{"location":"api/#API-reference","page":"API reference","title":"API reference","text":"","category":"section"},{"location":"api/#Index","page":"API reference","title":"Index","text":"","category":"section"},{"location":"api/","page":"API reference","title":"API reference","text":"","category":"page"},{"location":"api/#Docstrings","page":"API reference","title":"Docstrings","text":"","category":"section"},{"location":"api/","page":"API reference","title":"API reference","text":"Modules = [DataGraphs]","category":"page"},{"location":"api/#DataGraphs.DataGraph","page":"API reference","title":"DataGraphs.DataGraph","text":"DataGraph{T<:Integer,G<:AbstractGraph{T},VL,VD,ED} <: AbstractGraph{T}\n\nStructure for graphs with metadata.\n\nFields\n\ngraph::G: the underlying graph, following the Graphs.jl AbstractGraph{T} interface\nlabels::Vector{VL}: the list of vertex labels\nvertices::Dict{VL,T}: the dictionary mapping each vertex label to the associated integer index v\nvertex_data::Vector{VD}: the list of vertex data objects, indexed by integers v\nedge_data::Dict{Tuple{T,T},ED}: the list of edge data objects, indexed by integer tuples (s,d)\ngraph_data::GD: a single graph data object\n\n\n\n\n\n","category":"type"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = DataGraphs","category":"page"},{"location":"#DataGraphs.jl","page":"Home","title":"DataGraphs.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Welcome to the documentation for DataGraphs.jl.","category":"page"},{"location":"","page":"Home","title":"Home","text":"DataGraphs.jl deals with graphs whose vertices or edges have associated metadata. In addition, vertices are allowed to have a \"label\" of arbitrary type, instead of the integer labels imposed by Graphs.jl.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Our main inspiration is MetaGraphsNext.jl, but we made slightly different design choices.","category":"page"},{"location":"#Getting-started","page":"Home","title":"Getting started","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"To install this package, open the Julia REPL, type ] to switch to the Pkg REPL, and run:","category":"page"},{"location":"","page":"Home","title":"Home","text":"pkg> add https://github.com/gdalle/DataGraphs.jl","category":"page"}]
}
