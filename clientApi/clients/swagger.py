# # from drf_yasg import openapi
# # from drf_yasg.views import get_schema_view
# from django.urls import path

# from . import views

# schema_view = get_schema_view(
#     openapi.Info(
#         title='My API',
#         default_version='v1',
#         description='API for managing clients',
#     ),
#     public=True,
# )

# swagger_patterns = [
#     path('swagger(<format>.json|.yaml)', schema_view.without_ui(cache_timeout=0), name='schema-json'),
#     path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
#     path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
# ]

# urlpatterns = [
#     *swagger_patterns,
# ]
