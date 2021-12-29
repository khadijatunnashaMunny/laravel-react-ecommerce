<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;


class CategoryController extends Controller
{

    public function category(Request $request)
    {

        $category = new Category();
        $category->productId = $request->input('productId');
        $category->productName = $request->input('productName');
        $category->productDes = $request->input('productDes');
        $category->productPrice = $request->input('productPrice');
        $category->save();

        return  $category;
    }
}
